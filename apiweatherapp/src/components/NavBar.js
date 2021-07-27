
import { AppBar, Typography, TextField, InputAdornment, Button, Icon, Hidden } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import MenuIcon from '@material-ui/icons/Menu';
import brandImg from "../images/brandImg.svg";
import { useState, useEffect, useRef } from 'react';
import { Autocomplete } from "@material-ui/core";
import moment from 'moment';
import sunny from "../images/weatherStates/sunny.svg";
import { Report } from "notiflix";

export const getDay = (unixTime) => {
    return moment.unix(unixTime).format("dddd");
};
export const getDate = (unixTime) => {
    let hour = parseInt(moment.unix(unixTime).format("HH"));
    let minute = moment.unix(unixTime).format("mm");
    hour = hour > 12 ? `${hour - 12}:${minute}pm` : `${hour}:${minute}am`;
    let date = `${moment.unix(unixTime).format("MMM, Do,")} ${hour}`;
    return date;
};
export const getDateOnly = (unixTime) => {
    return moment.unix(unixTime).format("MMM, Do, YYYY");
}

export const getTime = (unixTime) => {
    let hour = parseInt(moment.unix(unixTime).format("HH"));
    let minute = moment.unix(unixTime).format("mm");
    hour = hour > 12 ? `${hour - 12}:${minute}pm` : `${hour}:${minute}am`;
    return hour;
}

export const formatCurrentData = (data) => {
    return {
        day: getDay(data.current.dt),
        date: getDate(data.current.dt),
        timezone: data.timezone,
        sunrise: getTime(data.current.sunrise),
        sunset: getTime(data.current.sunset),
        temp: data.current.temp,
        icon: sunny,
        weatherStatus: data.current.weather[0].main,
        description: data.current.weather[0].description,
        humidity: data.current.humidity,
        pressure: data.current.pressure,
        windSpeed: data.current.wind_speed,
        visibility: data.current.visibility
    };
};

export const formatDailyData = (item) => {
    return {
        date: getDateOnly(item.dt),
        day: getDay(item.dt),
        description: item.weather[0].description,
        icon: sunny,
        weatherStatus: item.weather[0].main,
        humidity: item.humidity,
        windSpeed: item.wind_speed,
        pressure: item.pressure,
        dayTemp: item.temp.day,
        nightTemp: item.temp.night,
        mornTemp: item.temp.morn,
        eveTemp: item.temp.eve,
        minTemp: item.temp.min,
        maxTemp: item.temp.max
    }

}

export const makeOpenWeatherApiRequest = (dispatcher, actionType, data) => {
    fetch("https://muterehm3f.execute-api.us-east-2.amazonaws.com/official/apiweatherapp",
        {
            "method": "POST",
            body: JSON.stringify({ target: 'openWeather', lon: data.lon, lat: data.lat })
        }
    )
        .then(response => response.json())
        .then(resData => {
            if (data.current && data.daily) {
                data.current = formatCurrentData(resData);
                data.daily = resData.daily.map(formatDailyData);
                return data;
            }
            else {
                throw new Error(`Failed to get forecast for ${data.city}.`);
            }
        })
        .then(data => { dispatcher({ type: actionType, data: data }); return data })
        .then(console.log)
        .catch(error=>{Report.failure(error.message, "API daily request limit exceeded!!", "Ok");})

}



const useCollapseButton = () => {
    const [collapseButton, setCollapseButton] = useState(false);
    const handleCollapseButton = () => setCollapseButton(!collapseButton);

    return [collapseButton, handleCollapseButton]
}

const Search = ({ collapseButton, dispatcher, size, only }) => {
    const [value, setValue] = useState(null);
    const [inputValue, setInputValue] = useState('');
    const [options, setOptions] = useState([]);

    const timeout = useRef(null);

    // fetch a googlePlaces query whenever the search input changes
    useEffect(() => {
        /* :debug 
        console.log(inputValue);
        console.log(value);
        */

        // do not fetch new googlePlaces queries when the user selects an option or when the input is an empty string
        if (inputValue && value !== inputValue) {
            let query = inputValue;
            clearTimeout(timeout.current);
            timeout.current = setTimeout(() => {
                const url = "https://muterehm3f.execute-api.us-east-2.amazonaws.com/official/apiweatherapp";
                const options = { "method": "POST", body: JSON.stringify({ target: 'googlePlaces', query: query }) }
                fetch(url, options)
                    .then(response => response.json())
                    .then(data => data.results.map(item => {
                        return { address: item.formatted_address, location: item.geometry.location, name: item.name }
                    }).slice(0, 10)) // get only top 10 result
                    .then(data => {
                        /* :debug */
                        console.log(data);
                        return data
                    })
                    .then(data => setOptions(options => data ? data : options))
                    .catch(console.log)

            }, 400)
        }
    }, [inputValue, value])

    const submitRequest = () => {
        // only submit request if a user input exists, a drop down option exists, and the user selected a drop down option
        if (value && inputValue && value === inputValue) {
            let newLocation = {
                city: value.name,
                lat: value.location.lat,
                lon: value.location.lng,
            };
            makeOpenWeatherApiRequest(dispatcher, 'addForecast', newLocation);
            setValue(null);
        }
        else {
             Report.failure("Missing Search Query",
              "Queries (input) must be selected from the dropdown menu. If no dropdown option exists, then no forecast exists for the query.",
                 "Ok",
                 () => { },
                 { svgSize:'100px', messageFontSize:'14px', messageColor:'#'}
                 );
        }

    }
    return (
        <Hidden mediaQuery only={only}>
            <div class={`space-x-2 ${collapseButton ? 'hidden' : 'contents'}`} >

                <Autocomplete id='search' className={size}
                    getOptionLabel={(option) => option.address}
                    options={options}
                    filterOptions={(x) => x}
                    value={value}
                    onChange={(e, newValue) => {
                        setValue(newValue);
                        setInputValue(newValue);
                    }}
                    onInputChange={(e, newInputValue) => {
                        setInputValue(newInputValue);
                    }}
                    renderInput={(params) =>
                        <TextField {...params}
                            InputProps={{
                                ...params.InputProps,
                                size: 'small',
                                placeholder: 'Enter the Name of a Location',
                                margin: 'dense',
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <SearchIcon />
                                    </InputAdornment>
                                ),
                            }}
                            class={`w-full bg-white text-black rounded-xl `} />}
                />

                <div className='flex space-x-2 mb-2 sm:mb-0'>
                    <Button size='small' variant="outlined" className='h-10 lg:self-center' onClick={submitRequest}>Get Forecast</Button>
                    <Button onClick={() => dispatcher({ type: 'openMenu' })} size='small' variant='outlined' color='error' className='h-10 lg:self-center'>Options</Button>
                </div>
            </div>
        </Hidden>

    )
}


function NavBar({ dispatcher, forecast }) {
    const [collapseButton, handleCollapseButton] = useCollapseButton();
    return (

        <AppBar class='bg-black text-white p-2 py-3  w-full'>
            <div id='nav-row' class='flex'>
                <div class='flex space-x-1 items-center'>
                    <Icon fontSize='large'><img alt='brand visual' src={brandImg} /></Icon>
                    <Typography variant='h6'>API Weather App</Typography>
                </div>
                <div class='flex justify-center items-center flex-grow'>
                    <Search dispatcher={dispatcher} size='w-5/12 mx-2' only={['xs', 'sm']} />
                </div>
                <Hidden mdUp>
                    <div class='ml-auto self-center' component='button' onClick={handleCollapseButton} >
                        <MenuIcon color='white' fontSize='large' />
                    </div>
                </Hidden>
            </div>

            <div class='flex justify-center items-center flex-grow'>
                <Search dispatcher={dispatcher} collapseButton={collapseButton} size='w-5/12' only={['xs', 'lg', 'md', 'xl']} />
            </div>
            <div class='flex flex-col-reverse justify-center items-center flex-grow'>
                <Search dispatcher={dispatcher} collapseButton={collapseButton} size='w-11/12' only={['sm', 'lg', 'md', 'xl']} />
            </div>
        </AppBar>

    )
};


export default NavBar;