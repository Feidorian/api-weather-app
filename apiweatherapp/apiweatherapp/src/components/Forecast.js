import React, { useState } from 'react';
import { Grid, Paper, Box, Typography, Stack, IconButton, Menu, MenuItem } from "@material-ui/core";
import {getTempF } from "../App";
import MoreVertIcon from '@material-ui/icons/MoreVert';
import pressure from "../images/pressure.svg";
import humidity from "../images/humidity.svg";
import { Confirm } from "notiflix";
import generator from "element-id-generator";

const Item = ({ appState, data }) => (
        <Grid item  sx={{ minWidth: '22rem',  maxWidth: '22rem', mb: '1rem' }} xs>
            <Paper elevation={3} sx={{ p: '0.6rem', background: 'black', color: 'white', border: '0.13rem solid white', borderRadius: '0.7rem' }}>
                {/* header */}
                <Grid container columnSpacing={2}>
                    <Grid item width='fit-content' flexGrow='1' mb='1rem' xs>
                        <Stack>
                            <Typography sx={{ color: 'error.light' }}>{data.date}</Typography>
                            <Typography variant='h5' sx={{  fontWeight: '500' }}>{data.day}</Typography>
                        </Stack>
                    </Grid>

                    <Grid item={true} width='fit-content' alignSelf='center' flexGrow='0' xs>
                        <Stack direction='row' spacing={0.5} justifyContent='between'>
                            <Typography sx={{ color: 'warning.light', fontWeight: '500', fontSize: '2.5rem' }}>
                                {appState.degUnit === 'C' ? (data.dayTemp).toFixed() : getTempF(data.dayTemp)}°{appState.degUnit}
                            </Typography>
                            <IconButton id="long-button" sx={{ color: 'white', alignSelf: 'start', visibility: 'hidden' }}>
                                <MoreVertIcon className='text-white hover:text-green-600' />
                            </IconButton>

                        </Stack>
                    </Grid>
                </Grid>

                {/* body */}
                <Grid container direction='row' justifyContent='between' width='100%' sx={{ backgroundColor: 'warning.mai' }}>
                    {/* weather Status */}
                    <Grid item alignSelf='center' flexGrow='0.1' sx={{ mt: '-1.9rem' }}>
                        <Stack alignItems='center'  spacing={-2}>
                        <Box component='img' width='6rem'  src={`http://openweathermap.org/img/wn/${data.icon}@2x.png`} />
                            <Typography sx={{ fontWeight: '500', color: 'warning.light', width:'fit-content', textAlign:'center' }}>{data.shortDescription}</Typography>
                        </Stack>
                    </Grid>

                    {/* timezone status */}
                    <Grid item flexGrow='1' alignSelf='center' xs >
                        <Stack item direction='row' justifyContent='space-around'>
                            <Typography>
                                <Box component='span' sx={{ color: 'primary.light' }}>Min: </Box>
                                <Box component='span' sx={{ color: 'yellow' }}>
                                    {appState.degUnit === 'C' ? (data.minTemp).toFixed() : getTempF(data.minTemp)}°{appState.degUnit}
                                </Box>
                            </Typography>
                            <Typography>
                                <Box component='span' sx={{ color: 'primary.light' }}>Max: </Box>
                                <Box component='span' sx={{ color: 'yellow' }}>
                                    {appState.degUnit === 'C' ? (data.maxTemp).toFixed() : getTempF(data.maxTemp)}°{appState.degUnit}
                                </Box>
                            </Typography>
                        </Stack>

                        <Stack item direction='row' justifyContent='space-around'>
                            <Typography>
                                <Box component='span' sx={{ color: 'primary.light' }}>Day: </Box>
                                <Box component='span' sx={{ color: 'yellow' }}>
                                    {appState.degUnit === 'C' ? (data.dayTemp).toFixed() : getTempF(data.dayTemp)}°{appState.degUnit}
                                </Box>
                            </Typography>
                            <Typography>
                                <Box component='span' sx={{ color: 'primary.light' }}>Night: </Box>
                                <Box component='span' sx={{ color: 'yellow' }}>
                                    {appState.degUnit === 'C' ? (data.nightTemp).toFixed() : getTempF(data.nightTemp)}°{appState.degUnit}
                                </Box>
                            </Typography>
                        </Stack>

                        <Stack item direction='row' justifyContent='space-around'>
                            <Typography>
                                <Box component='span' sx={{ color: 'primary.light' }}>Morn: </Box>
                                <Box component='span' sx={{ color: 'yellow' }}>
                                    {appState.degUnit === 'C' ? (data.mornTemp).toFixed() : getTempF(data.mornTemp)}°{appState.degUnit}
                                </Box>
                            </Typography>
                            <Typography>
                                <Box component='span' sx={{ color: 'primary.light' }}>Eve: </Box>
                                <Box component='span' sx={{ color: 'yellow' }}>
                                    {appState.degUnit === 'C' ? (data.eveTemp).toFixed() : getTempF(data.eveTemp)}°{appState.degUnit}
                                </Box>
                            </Typography>
                        </Stack>
                    </Grid>
                </Grid>

                {/* footer  */}
                <Grid item xs sx={{ backgroundColor: 're', mt: '0.5rem' }}>
                    <Stack direction='row' width='20rem' spacing={2} sx={{ flexWrap: 'wrap', justifyContent: 'center' }}>
                        <Stack spacing='0.3rem' direction='row' alignItems='center'>
                            <Box component='img' width='1.4rem' src={pressure} alt="" ></Box>
                            <Typography >Pressure: <span style={{ color: 'yellow' }}>{data.pressure} hPa</span></Typography>
                        </Stack>
                        <Stack spacing='0.2rem' direction='row' alignItems='center'>
                            <Box component='img' width='1.6rem' src={humidity} alt=""></Box>
                            <Typography >Humidity: <span style={{ color: 'yellow' }}>{data.humidity}%</span></Typography>
                        </Stack>
                        <Stack spacing='-0.2rem' direction='row' alignItems='center'>
                            <Box component='i' width='1.6rem' className='fas fa-wind' />
                            <Typography >WindSpeed: <span style={{ color: 'yellow' }}>{data.windSpeed} m/s</span></Typography>
                        </Stack>

                    </Stack>
                </Grid>
            </Paper>
        </Grid>
);

function Forecast({appState}) {

    return (
        <Stack spacing={1} sx={{ backgroundColor: 'blu', px: '0.5rem' }} >
            <Typography variant='h5'  alignSelf={{xs:'center', sm:'flex-start'}}
                sx={{
                    backgroundColor: 'black', fontWeight: 'bold', color: 'primary.light', width: 'fit-content',
                    p: '0.3rem', borderRadius: '0.5rem', border: '0.2rem solid', borderColor: 'warning.light'
                }}>
                8-Day Forecast For {appState.selectedForecast.city}
            </Typography>
            <Grid container flexWrap='wrap' columnSpacing={{ xs: '0', sm:'1' }} maxWidth='90rem' justifyContent={{xs:'center', sm:'flex-start'}} >
                {appState.selectedForecast.daily.map(item => <Item data={item} key={generator.generate()} appState={appState}/>)}
            </Grid>
        </Stack>
    )
};

export default Forecast;