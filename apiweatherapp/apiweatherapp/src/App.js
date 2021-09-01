import { useEffect, useReducer, useState } from 'react';
import { Box, Grid, Stack, Toolbar } from "@material-ui/core";
import Nav from "./components/Nav";
import Options from "./components/Options";
import About from "./components/About";
import Locations from "./components/Locations";
import Forecast from "./components/Forecast";
import wallpaperList from './components/wallpaperList';
import sunny from "./images/weather-icons/sunny.svg";
import { use100vh } from 'react-div-100vh';
import React from 'react';
import { Notify } from 'notiflix';

export const getTempF = (temp) => ((temp * (9 / 5)) + 32).toFixed();

const getRandomInt = (max) => Math.floor(Math.random() * max);

const onDeleteForecast = (state, lon, lat) => {
  let newList = state.locationList.filter(item => item.lon !== lon && item.lat !== lat);
  let selectedForecast = state.selectedForecast.lon === lon && state.selectedForecast.lat === lat ? (newList[0]) : state.selectedForecast;
  return { ...state, locationList: newList, selectedForecast: selectedForecast };
};

const onAddForecast = (state, data) => {
  let locationExists = false;
  let newList = state.locationList.map(item => {
    if (item.lon === data.lon && item.lat === data.lat) {
      locationExists = true;
      return data;
    }
    else return item;
  });
  if(!locationExists) newList = [data, ...newList]
  return { ...state, locationList: newList, selectedForecast: data }
}

const defaultState = {
  locationList: [],
  selectedForecast: null,
  settings: false,
  about: false,
  degUnit: 'F',
  collapseButton: false,
  wallpaper: wallpaperList[2 || getRandomInt(12)],
  deleteLocalStorage: false,
  enableLocalStorage: true,
  height: window.innerHeight,
};

const dispatcher = (state, action) => {
  switch (action.type) {
    case 'setLocalStorage':
      if(state.enableLocalStorage) localStorage.setItem('appState', JSON.stringify(state));
      return { ...state };
    case 'deleteLocalStorage':
      localStorage.setItem('appState', null);
      return { ...defaultState };
    case 'enableLocalStorage':
      let newState = {...state, enableLocalStorage:true}
      localStorage.setItem('appState', JSON.stringify(newState));
      return { ...state, enableLocalStorage:true};
    case 'disableLocalStorage':
      let defState ={...defaultState, enableLocalStorage:false}
      localStorage.setItem('appState', JSON.stringify(defState));
      return { ...state, enableLocalStorage:false};
    case 'setState':
      return { ...action.data };
    case 'addForecast':
      return onAddForecast(state, action.data);
    case 'setSelectedForecast':
      return { ...state, selectedForecast: state.locationList.find(location => location.lat === action.lat && location.lon === action.lon) }
    case 'onDeleteForecast':
      return onDeleteForecast(state, action.lon, action.lat);
    case 'toggleCollapseButton':
      return { ...state, collapseButton: !state.collapseButton }
    case 'setWallpaper':
      return { ...state, wallpaper: action.data }
    case 'toggleDegUnit':
      return { ...state, degUnit: state.degUnit === 'F' ? 'C' : 'F' }
    case 'openSettings':
      return { ...state, settings: true };
    case 'closeSettings':
      return { ...state, settings: false };
    case 'openAbout':
      return { ...state, about: true };
    case 'closeAbout':
      return { ...state, about: false };
    case 'setHeight':
      return {...state, height:action.data}
    default:
      return state;
  }
}


function App() {
  const [appState, appDispatcher] = useReducer(dispatcher, defaultState);
  let height = use100vh();

  const onHeightChange=()=>appDispatcher({type:'setHeight', data:window.innerHeight})
  useEffect(() => {
    Notify.init({width:'300px',fontSize:'14px',timeout:4000,messageMaxLength:200, position:'left-bottom'});
    if (appState.enableLocalStorage && localStorage.getItem('appState')) {
      let newState = JSON.parse(localStorage.getItem('appState'));
      appDispatcher({ type: 'setState', data: newState });
    };
  }, []);

  useEffect(() => {
    if (appState.enableLocalStorage) {
      localStorage.setItem('appState', JSON.stringify(appState));
    }
  }, [appState])

  return (
    <Grid container direction='column' height={height}>
      <Grid item>
        <Nav appState={appState} appDispatcher={appDispatcher} />
      </Grid>
      <Grid item width='100vw' sx={{
        backgroundImage: `url(${appState.wallpaper})`, backgroundSize: 'cover',
        backgroundPosition: 'center', overflowY: 'auto', flex: '1', overflowX: 'hidden'
      }} >
        <Stack spacing={3} >
          <Locations appState={appState} appDispatcher={appDispatcher} />
          {+Boolean(appState.selectedForecast) && <Forecast appState={appState} />}
        </Stack>
        <Options appState={appState} appDispatcher={appDispatcher} />
        <About appState={appState} appDispatcher={appDispatcher} />
      </Grid>
    </Grid>
  );
}

export default App;
