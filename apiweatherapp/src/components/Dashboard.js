
import { Menu, MenuItem, Typography } from "@material-ui/core";
import { Alert } from "@material-ui/core";
import { Grid, IconButton } from "@material-ui/core";
import MoreVertIcon from '@material-ui/icons/MoreVert';
import humidity from "../images/humidity.svg";
import pressure from "../images/pressure.svg";
import { useState } from 'react';
import { Confirm } from "notiflix";
import { getTempC, getTempF } from "../App";
import {makeOpenWeatherApiRequest} from './NavBar';


const updateItem = (dispatcher, index, oldData) =>  {
        let newLocation = {
            city: oldData.name,
            lat: oldData.lat,
            lon: oldData.lon,
        };
    makeOpenWeatherApiRequest(dispatcher, 'updateForecast', newLocation);
    }
    
const Item = ({ data, index, dispatcher, forecast }) => {
    const [openOptions, setOpenOptions] = useState(null);
    const onConfirmDeleteLocation = (dispatcher, index) => {
        setOpenOptions(null);
        Confirm.show(
            "❌ Confirm Deletion",
            "Are you Sure you want to delete this location?",
            "Yes",
            "Cancel",
            () => dispatcher({ type: 'deleteForecast', data: index }),
            () => { },
            { titleColor: '#e66146', fontFamily: "quicksand", useGoogleFont: false }
        )
    }

    return (
        <div key={index} class=' bg-black text-white flex rounded-lg p-3 mb-3 border-2 flex flex-col' style={{ minWidth: '21rem' }}>
            <div id='header' class='flex flex-grow justify-between'>
                <div id='location-date' class=''>
                    <Typography variant='p' className='font-medium' sx={{ color: 'error.main' }}>
                        {data.current.date}
                    </Typography>
                    <Typography variant='p' className='block  font-medium text-lg'>
                        {data.city}
                    </Typography>
                </div>

                <div id='temp' class=' text-center self-center'>
                    <Typography variant='p' className='block text-4xl font-medium' sx={{ color: 'warning.light' }}>
                        {forecast.tempUnit === 'C' ? getTempC(data.current.temp) : getTempF(data.current.temp)}°{forecast.tempUnit} </Typography>
                </div>

                <div id='delete-button' className='w-1/12'>
                    <IconButton id="long-button" onClick={(e) => setOpenOptions(e.currentTarget)}>
                        <MoreVertIcon className='text-white hover:text-green-600' />
                    </IconButton>
                    <Menu anchorEl={openOptions} open={Boolean(openOptions)} onClose={() => setOpenOptions(null)}>
                        <MenuItem onClick={() => { dispatcher({ type: 'setSelectedForecast', data: index }); setOpenOptions(null) }}>Select Location</MenuItem>
                        <MenuItem onClick={() => updateItem(dispatcher, index, data)}>Update Location</MenuItem>
                        <MenuItem onClick={() => onConfirmDeleteLocation(dispatcher, index)}>
                            Delete location
                        </MenuItem>
                    </Menu>
                </div>
            </div>

            <div id='content' >
                <div class='flex items-center mb-3 px-3 space-x-5'>
                    <div id='weather-status' class='w-5/12 bg-red-90 flex flex-col items-center justify-center'>
                        <img width='80' className='block' src={data.current.icon} alt='weather' style={{ marginTop: '-20px' }} />
                        <Typography variant='p' className='text-lg text-center' sx={{ marginTop: '-15px' }}>{data.current.weatherStatus}</Typography>
                    </div>

                    <div className=' flex flex-col mx-auto  w-full'>
                        <div className='self-center text-center font-medium'><span className='text-blue-500'>TimeZone</span> <br />{data.current.timezone}</div>
                        <div className='flex justify-around'>
                            <div className='text-center'><span className='text-blue-500 font-medium'>Sunrise</span> <br />{data.current.sunrise}</div>
                            <div className='text-center'><span className='text-blue-500 font-medium'>Sunset</span> <br /> {data.current.sunset}</div>
                        </div>
                    </div>

                </div>

                <div className='flex flex-wrap space-x-2 justify-center p-1' style={{ width: '20rem' }}>
                    <Typography class='block flex items-center'><img width='23' className='inline-block mr-1' alt='' src={pressure} /> Pressure : <span style={{ color: 'yellow' }}>{data.current.pressure} hPa</span></Typography>
                    <Typography class='block'><img width='25' className='inline-block' alt='' src={humidity} />Humidity : <span style={{ color: 'yellow' }}>{data.current.humidity}%</span></Typography>
                    <Typography class='block'> <i class="fas fa-wind" /> WindSpeed : <span style={{ color: 'yellow' }}>{data.current.windSpeed} m/s</span></Typography>
                    <Typography class='block'><i class="fas fa-smog" /> Visibility  : <span style={{ color: 'yellow' }}>{data.current.visibility} m</span></Typography>

                </div>
            </div>
        </div>

    )
}
function Dashboard({ degUnit, forecast, dispatcher }) {

    return (
        <div id='dashboard' class='py-4 px-2 bg-red-90 flex flex-col'>
            <Alert severity='info' className='mx-auto flex justify-center'>
                <Typography class='text-blue-900 font-medium'>
                    Cards are horizontally scrollable (especially on smaller Screen).
                </Typography>
            </Alert>

            <Typography class='self-start mt-3 block  text-2xl border-2  border-yellow-200
                font-medium  bg-black p-2 rounded-lg text-blue-400' >Dashboard</Typography>


            <Grid class='flex justify-start overflow-x-auto space-x-3 mt-4'>
                {forecast.forecastList.map((data, index) => <Item data={data} degUnit={degUnit} dispatcher={dispatcher} forecast={forecast} index={index} />)}
            </Grid>
        </div>
    )
};


export default Dashboard;