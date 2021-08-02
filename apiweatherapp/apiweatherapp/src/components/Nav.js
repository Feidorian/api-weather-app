import { useReducer, useRef, useEffect } from 'react';
import { Box, AppBar, Toolbar, Grid, Autocomplete, TextField, InputAdornment, Button, Stack, Typography } from '@material-ui/core';
import brandIcon from "../images/brandImg.svg";
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import SearchIcon from '@material-ui/icons/Search';
import moment from 'moment';
import { Report, Notify, Loading } from "notiflix";

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

const formatCurrentData = (data) =>
({
    day: getDay(data.current.dt),
    date: getDate(data.current.dt),
    timezone: data.timezone,
    sunrise: getTime(data.current.sunrise),
    sunset: getTime(data.current.sunset),
    temp: data.current.temp,
    icon: data.current.weather[0].icon,
    weatherStatus: data.current.weather[0].main,
    shortDescription: data.current.weather[0].description,
    humidity: data.current.humidity,
    pressure: data.current.pressure,
    windSpeed: data.current.wind_speed,
    visibility: data.current.visibility
})

const formatDailyData = (data) =>
    data.daily.map(item => ({
        date: getDateOnly(item.dt),
        day: getDay(item.dt),
        shortDescription: item.weather[0].description,
        icon: item.weather[0].icon,
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
    }));


export const makeOpenWeatherApiRequest = (dispatcher, newLocation, loadingInit) => {
    loadingInit();
    fetch("https://muterehm3f.execute-api.us-east-2.amazonaws.com/official/apiweatherapp",
        { "method": "POST", body: JSON.stringify({ target: 'openWeather', lon: newLocation.lon, lat: newLocation.lat }) })
        .then(response => response.json())
        .then(data => { console.log(data); return data })
        .then(data => {
            if (data.current && data.daily) {
                newLocation.current = formatCurrentData(data);
                newLocation.daily = formatDailyData(data);
                return newLocation;
            }
            else throw new Error(`Failed to get forecast.`);
        })
        .then(data => { dispatcher({ type: 'addForecast', data: data }); return data })
        .then(Loading.remove(1100))
        .then(Notify.success('Location Successfully Added/Updated'))
        .catch(error => { Loading.remove(); Report.failure(error.message, "API daily request limit exceeded!!", "Ok"); })

}

const navReducer = (state, action) => {
    switch (action.type) {
        case 'setSelectedOption':
            return { ...state, selectedOption: action.data };
        case 'setOptions':
            return { ...state, options: action.data ? action.data : state.options };
        case 'setInputValue':
            return { ...state, inputValue: action.data };
        default:
            return { ...state };
    }
};
function Nav({ appState, appDispatcher }) {
    const state = { selectedOption: null, inputValue: '', options: [], timeout: useRef(null) };
    const [navState, navDispatcher] = useReducer(navReducer, state);
    useEffect(() => {
        // do not fetch new googlePlaces queries when the user selects an option or when the input is an empty string
        if (navState.inputValue && navState.selectedOption !== navState.inputValue) {
            let query = navState.inputValue;
            clearTimeout(navState.timeout.current);
            navState.timeout.current = setTimeout(() => {
                const url = "https://muterehm3f.execute-api.us-east-2.amazonaws.com/official/apiweatherapp";
                const options = { "method": "POST", body: JSON.stringify({ target: 'googlePlaces', query: query }) }
                fetch(url, options)
                    .then(response => response.json())
                    .then(data => (data.results.length) ? data : (function () { throw new Error(`Unable To Fetch Geo Coordinates for ${query}`) }()))
                    .then(data => data.results.map(item => ({ address: item.formatted_address, name: item.name, location: item.geometry.location})
                    ).filter((i, idx) => idx < 10)) // get only top 10 result
                    .then(data => navDispatcher({ type: 'setOptions', data: data }))
                    .catch(err => {Notify.failure("failed to get Geo Coordinates for the Location")})

            }, 400)
        }
    }, [navState.inputValue, navState.selectedOption, navState.timeout]);


    const submitRequest = () => {
        // only submit request if a user input exists, a drop down option exists, and the user selected a drop down option
        if (navState.selectedOption && navState.inputValue && navState.selectedOption === navState.inputValue) {
            let newLocation = {
                city: navState.selectedOption.name,
                lat: navState.selectedOption.location.lat,
                lon: navState.selectedOption.location.lng,
            };
            makeOpenWeatherApiRequest(appDispatcher, newLocation, ()=>Loading.dots('Fetching Weather Data'));
            navDispatcher({ type: 'setSelectedOption', data: null });
        }
        else {
            Report.failure("Missing Search Query",
                "Queries (input) must be selected from the dropdown menu.",
                "Ok",
                () => { },
                { svgSize: '100px', messageFontSize: '14px', messageColor: '#' }
            );
        }

    }
    
    return (
        <AppBar sx={{ position: 'static', backgroundColor: 'black' }}>
            <Toolbar sx={{ p: '6px' }}>
                <Grid container sx={{ alignItems: 'center', direction: { xs: 'column', md: 'row' } }}>
                    {/* brand container */}
                    <Grid container item sx={{ alignItems: 'center', width: { xs: '1', md: 'auto' } }}>
                        {/* brand logo */}
                        <Grid item>
                            <Box display='block' component='img' src={brandIcon} sx={{ width: '2.5rem', height: '2.5rem' }} />
                        </Grid>
                        {/* brand text */}
                        <Grid item>
                            <Typography variant='h6' sx={{ fontWeight: '400' }}>API Weather App</Typography>
                        </Grid>
                        <Grid item>
                            <IconButton onClick={() => appDispatcher({ type: 'openAbout' })}>
                            <InfoOutlinedIcon sx={{color:'primary.light'}}/>
                            </IconButton>
                        </Grid>
                        {/* nav collapse button  */}
                        <Grid item sx={{ ml: 'auto' }}>
                            <IconButton onClick={() => appDispatcher({ type: 'toggleCollapseButton' })}>
                                <MenuIcon sx={{ color: 'white', display: { md: 'none', xs: 'block' } }} />
                            </IconButton>
                        </Grid>
                    </Grid>

                    {/* search container */}
                    <Grid item container direction={{ xs: 'column-reverse', sm: 'row' }} spacing='10' justifyContent='center' alignItems='center' flex='1' py='10px'
                        display={{ md: 'flex', xs: `${appState.collapseButton ? 'none' : 'flex'}` }}>
                        {/* search field */}
                        <Grid item flexGrow={{ sm: '1', md: '0.8', lg: '0.5' }} width={{ xs: '100%', sm: 'auto' }}>
                            <Autocomplete sx={{ backgroundColor: 'white', borderRadius: '0.7rem' }}
                                getOptionLabel={(option) => option.address}
                                options={navState.options}
                                filterOptions={(x) => x}
                                value={navState.selectedOption}
                                onChange={(e, newValue) => {
                                    navDispatcher({ type: 'setSelectedOption', data: newValue });
                                    navDispatcher({ type: 'setInputValue', data: newValue });
                                }}
                                onInputChange={(e, newInputValue) => {
                                    navDispatcher({ type: 'setInputValue', data: newInputValue });
                                }}
                                renderInput={(params) =>
                                    <TextField {...params}
                                        InputProps={{
                                            ...params.InputProps,
                                            size: 'small',
                                            placeholder: 'Enter the Name of a Location',
                                            margin: 'dense',
                                            startAdornment: (<InputAdornment position='start'><SearchIcon /></InputAdornment>)
                                        }}
                                    />}
                            />
                        </Grid>
                        {/* button container  */}
                        <Grid item>
                            <Stack direction='row' spacing={1}>
                                <Button variant='outlined' size='small' sx={{ color: 'primary.light', }} onClick={submitRequest} >Get Forecast</Button>
                                <Button variant='outlined' size='small' color='error' sx={{ color: 'error.light' }} onClick={() => appDispatcher({ type: 'openSettings' })}>Options</Button>
                            </Stack>
                        </Grid>

                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    );
}

export default Nav;