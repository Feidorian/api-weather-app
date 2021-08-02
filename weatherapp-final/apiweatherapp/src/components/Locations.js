import React, { useState } from 'react';
import { Grid, Paper, Box, Typography, Stack, IconButton, Menu, MenuItem, Alert } from "@material-ui/core";
import {getTempF } from "../App";
import MoreVertIcon from '@material-ui/icons/MoreVert';
import pressure from "../images/pressure.svg";
import humidity from "../images/humidity.svg";
import { Confirm, Loading } from "notiflix";
import generator from "element-id-generator";
import { makeOpenWeatherApiRequest } from './Nav';

const Item = ({ data, appState, appDispatcher }) => {
    const [openOptions, setOpenOptions] = useState(null);
    const confirmDeleteLocation = (dispatcher, lon, lat) => {
        setOpenOptions(null);
        Confirm.show(
            "❌ Confirm Deletion",
            "Are you Sure you want to delete this location?",
            "Yes",
            "Cancel",
            () => dispatcher({ type: 'onDeleteForecast', lon:lon, lat:lat }),
            () => { },
            { titleColor: '#e66146', fontFamily: "quicksand", useGoogleFont: false }
        )
    }
    return (
        <Grid item sx={{ width: 'fit-content', mb: '1rem'}}>
            <Paper elevation={3} sx={{ p: '0.6rem', background: 'black', color: 'white', border: '0.13rem solid white', borderRadius: '0.7rem' }}>
                {/* header */}
                <Grid container columnSpacing={2}>
                    <Grid item width='fit-content' flexGrow='1' xs>
                        <Stack>
                            <Typography sx={{ color: 'error.light' }}>{data.current.date}</Typography>
                            <Typography variant='h6' sx={{width:'fit-content'}}>{data.city}</Typography>
                        </Stack>
                    </Grid>

                    <Grid item width='fit-content' alignSelf='center' flexGrow='0' xs>
                        <Stack direction='row' spacing={0.5} justifyContent='between'>
                            <Typography sx={{ color: 'warning.light', fontWeight: '500', fontSize: '2.5rem' }}>
                                {appState.degUnit === 'C' ? (data.current.temp).toFixed() : getTempF(data.current.temp)}°{appState.degUnit}
                            </Typography>
                            <IconButton id="long-button" onClick={(e) => setOpenOptions(e.currentTarget)} sx={{ color: 'white', alignSelf: 'start' }}>
                                <MoreVertIcon className='text-white hover:text-green-600' />
                            </IconButton>
                            <Menu anchorEl={openOptions} open={Boolean(openOptions)} onClose={() => setOpenOptions(null)}>
                                <MenuItem onClick={() => { appDispatcher({ type: 'setSelectedForecast', lon:data.lon, lat:data.lat }); setOpenOptions(null); }}>
                                    Select Location
                                </MenuItem>
                                <MenuItem onClick={() => {
                                    let updatedLocation = {
                                        city: data.city,
                                        lat: data.lat,
                                        lon: data.lon,
                                    };
                                    makeOpenWeatherApiRequest(appDispatcher, updatedLocation, ()=>Loading.arrows('updating Weather Location'));
                                    setOpenOptions(null);
                                }}>
                                    Update Location
                                </MenuItem>
                                <MenuItem onClick={() => confirmDeleteLocation(appDispatcher, data.lon, data.lat)}>
                                    Delete location
                                </MenuItem>
                            </Menu>
                        </Stack>
                    </Grid>
                </Grid>

                {/* body */}
                <Grid container direction='row' justifyContent='between' width='100%' sx={{ backgroundColor: 'warning.mai' }}>
                    {/* weather Status */}
                    <Grid item flexGrow='0.1' sx={{ mt: '-1.5rem' }}>
                        <Stack spacing={-2} alignItems='center'>
                            <Box component='img' width='6rem' src={`http://openweathermap.org/img/wn/${data.current.icon}@2x.png`} />
                            <Typography sx={{ fontWeight: '500', color: 'warning.light', width:'8rem', textAlign:'center' }}>{data.current.shortDescription}</Typography>
                        </Stack>
                    </Grid>

                    {/* timezone status */}
                    <Grid item flexGrow='1' alignSelf='center' xs>
                        <Stack alignItems='center'>
                            <Typography sx={{ fontWeight: '500', color: 'primary.light' }}>TimeZone</Typography>
                            <Typography sx={{ fontWeight: '400' }}>{data.current.timezone}</Typography>
                        </Stack>
                        <Stack direction='row' spacing={5} justifyContent='center'>
                            <Stack >
                                <Typography sx={{ color: 'primary.light', fontWeight: '500' }}>Sunrise</Typography>
                                <Typography sx={{ fontWeight: '400' }}>{data.current.sunrise}</Typography>
                            </Stack>
                            <Stack sx={{}}>
                                <Typography sx={{ color: 'primary.light', fontWeight: '500' }}>Sunset</Typography>
                                <Typography sx={{ fontWeight: '400' }}>{data.current.sunset}</Typography>
                            </Stack>
                        </Stack>
                    </Grid>
                </Grid>

                {/* footer  */}
                <Grid item xs sx={{ backgroundColor: 're', mt: '0.5rem' }}>
                    <Stack direction='row' width='20rem' spacing={2} sx={{ flexWrap: 'wrap', justifyContent: 'center' }}>
                        <Stack spacing='0.3rem' direction='row' alignItems='center'>
                            <Box component='img' width='1.4rem' src={pressure} alt="" ></Box>
                            <Typography >Pressure: <span style={{ color: 'yellow' }}>{data.current.pressure} hPa</span></Typography>
                        </Stack>
                        <Stack spacing='0.2rem' direction='row' alignItems='center'>
                            <Box component='img' width='1.6rem' src={humidity} alt=""></Box>
                            <Typography >Humidity: <span style={{ color: 'yellow' }}>{data.current.humidity}%</span></Typography>
                        </Stack>
                        <Stack spacing='-0.2rem' direction='row' alignItems='center'>
                            <Box component='i' width='1.6rem' className='fas fa-wind' />
                            <Typography >WindSpeed: <span style={{ color: 'yellow' }}>{data.current.windSpeed} m/s</span></Typography>
                        </Stack>
                        <Stack spacing='-0.2rem' direction='row' alignItems='center'>
                            <Box component='i' width='1.6rem' className='fas fa-smog' />
                            <Typography >Visibility: <span style={{ color: 'yellow' }}>{data.current.visibility} m</span></Typography>
                        </Stack>

                    </Stack>
                </Grid>
            </Paper>
        </Grid>
    );
}


function Locations({ appState, appDispatcher }) {

    return (
        <Stack spacing={1} sx={{ backgroundColor: 'blu', px: '0.5rem', }}>
             <Alert severity='info' sx={{ width: 'fit-content', alignSelf:'center', mt:'0.5rem', textAlign:'center' }} >Dashboard cards are horizontally scrollable on smaller screens</Alert>
                <Typography variant='h5' alignSelf={{ xs: 'center', sm: 'flex-start' }}
                    sx={{
                        backgroundColor: 'black', fontWeight: 'bold', color: 'primary.light',
                        width: 'fit-content', p: '0.3rem', borderRadius: '0.5rem', border: '0.2rem solid', borderColor: 'warning.light'
                    }}>Dashboard</Typography>
            <Grid container spacing={1} flexWrap='nowrap' sx={{ overflowX: 'auto' }}  mx={{xs:'auto'}}>
                {appState.locationList.map(item =>
                    <Item data={item} key={generator.generate()} appState={appState} appDispatcher={appDispatcher} />)}
            </Grid>
        </Stack>
    )
};

export default Locations;