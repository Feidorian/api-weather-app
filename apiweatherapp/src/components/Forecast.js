import { Typography} from "@material-ui/core";
import humidity from "../images/humidity.svg";
import pressure from "../images/pressure.svg";
import { getTempC, getTempF } from "../App";


const Item = ({ data, forecast }) => (
    <div  class='bg-green-800 text-white flex rounded-lg p-3 border-2 flex flex-col mb-4' style={{ minWidth: '21rem' }}>
        <div id='header' class='flex flex-grow justify-between'>
            <div id='location-date' class='w-7/12'>
                <Typography variant='p' className='font-medium' sx={{ color: 'error.light' }}>
                    {data.date}
                </Typography>
                <Typography variant='p' className='block text-3xl font-medium'>
                    {data.day}
                </Typography>
            </div>

            <div id='temp' class='w-5/12 text-center self-center'>
                <Typography variant='p' className='block text-4xl font-medium' sx={{ color: 'warning.light' }}>
                    {forecast.tempUnit === 'C'? getTempC(data.dayTemp) : getTempF(data.dayTemp)}°{forecast.tempUnit}</Typography>
            </div>

            <div id='delete-button' className='w-1/12'>
                {/* <IconButton id="long-button" onClick={""}>
                    <MoreVertIcon className='text-white hover:text-green-600' />
                </IconButton> */}
            </div>
        </div>

        <div id='content'>
            <div class='flex mb-3 mt-2'>
                <div id='weather-status' class='w-5/12 bg-red-90 flex flex-col items-center justify-center'>
                    <img width='80' className='block' src={data.icon} alt='weather' style={{ marginTop: '-20px' }} />
                    <Typography variant='p' className='text-lg text-center' sx={{ marginTop: '-15px' }}>{data.description}</Typography>
                </div>

                <div className='w-7/12 flex flex-col space-y-2 mt-1 font-medium'>
                    <div className='flex justify-around'>
                        <div>Min: {forecast.tempUnit === 'C'? getTempC(data.minTemp): getTempF(data.minTemp)}°{forecast.tempUnit}</div>
                        <div>Max: {forecast.tempUnit === 'C'? getTempC(data.maxTemp) : getTempF(data.maxTemp)}°{forecast.tempUnit}</div>
                    </div>
                    <div className='flex justify-around'>
                        <div>Day: {forecast.tempUnit === 'C'? getTempC(data.dayTemp) : getTempF(data.dayTemp)}°{forecast.tempUnit}</div>
                        <div>Night {forecast.tempUnit === 'C'? getTempC(data.nightTemp): getTempF(data.nightTemp)}°{forecast.tempUnit}</div>
                    </div>
                    <div className='flex justify-around'>
                        <div>Morn: {forecast.tempUnit === 'C'? getTempC(data.mornTemp) : getTempF(data.mornTemp)}°{forecast.tempUnit}</div>
                        <div>Eve: {forecast.tempUnit === 'C'? getTempC(data.eveTemp) :getTempF(data.eveTemp)}°{forecast.tempUnit}</div>
                    </div>


                </div>
            </div>
            <div className='flex flex-wrap space-x-2 justify-center items-center' style={{ width: '20rem' }}>
                <Typography class='block flex items-center'><img width='23' className='inline-block mr-1' alt='' src={pressure} /> Pressure : <span style={{ color: 'yellow' }}>{data.pressure} hPa</span></Typography>
                <Typography class='block'><img width='25' className='inline-block' alt='' src={humidity} />Humidity : <span style={{ color: 'yellow' }}>{data.humidity}%</span></Typography>
                <Typography class='block'> <i class="fas fa-wind" /> WindSpeed : <span style={{ color: 'yellow' }}>{data.windSpeed} m/s</span></Typography>
            </div>
        </div>
    </div>
)

function Forecast({forecast}) {
    return (
        < div className = 'w-screen e px-2 text-white flex flex-col' >
            <Typography variant='p' className='self-start text-2xl border-2  border-yellow-200
                font-medium  bg-black p-2 rounded-lg text-blue-400  '>8-Day Forecast For {forecast.selectedForecast.city}</Typography>

            <div className='flex justify-start overflow-x-auto space-x-3 mt-4 mb-28 lg:mb-0'>
                {forecast.selectedForecast.daily.map((data, index) => <Item data={data} key={index} forecast={forecast} />)}
            </div>

        </div >
    )
}


export default Forecast;