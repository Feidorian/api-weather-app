import React, { useReducer, useEffect } from 'react';
import NavBar from "./components/NavBar";
import cover from "./images/wallpapers/wallpaper10.jpg";
import Dashboard from "./components/Dashboard";
import Forecast from "./components/Forecast";
import Options from "./components/Options";
import sunny from "./images/weatherStates/sunny.svg";


export const getTempC = (temp) => ((temp - 32) * (5 / 9)).toFixed(0);
export const getTempF = (temp) => ((temp * (9 / 5) + 32)).toFixed(0);

const reducer = (state, action) => {
  switch (action.type) {
    case 'setForecast':
      return action.data;
    case 'addForecast':
      return { ...state, forecastList: [action.data, ...state.forecastList], selectedForecast: action.data };
    case 'updateForecast':
      return {
        ...state,
        forecastList: state.forecastList.map((item, index) => index === action.index ? action.data : item),
        selectedForecast: state.selectedForecast === state.forecastList[action.index] ? action.data : state.selectedForecast
      };
    case 'deleteForecast':
      return {
        ...state,
        forecastList: state.forecastList.filter((_, index) => index !== action.data),
        selectedForecast: (state.selectedForecast === state.forecastList[action.data] ?
          (state.forecastList.length === 1 ? null :
            state.forecastList[action.data === 0 ? state.forecastList.length - 1 : action.data - 1]) : state.selectedForecast)
      };
    case 'setSelectedForecast':
      return { ...state, selectedForecast: (state.forecastList[action.data] || null) };
    case 'setTempDeg':
      return { ...state };
    case 'setWallpaper':
      return { ...state, wallpaper: action.data };
    case 'openMenu':
      return { ...state, openMenu: true };
    case 'closeMenu':
      return { ...state, openMenu: false };
    case 'setTempDegC':
      return { ...state, tempUnit: 'C' };
    case 'setTempDegF':
      return { ...state, tempUnit: 'F' };
      case 'setLocalStorage':
        return { ...state, setLocalStorage: action.data };
    default:
      return { ...state }
  }
}

const getData = () => [
  {
    city: '8417 Spruce Hill Dr',
    lat: '',
    lon: '',
    key: `${1234}${5678}`,
    current: {
      day: 'Monday',
      date: 'July, 6th, 08:37am',
      timezone: 'America/NewYork',
      sunrise: '08:00am',
      sunset: '07:00pm',
      temp: '0',
      icon: sunny,
      weatherStatus: 'Sunny',
      shortDescription: 'Light rain, gentle breeze.',
      humidity: '100',
      pressure: '100',
      windSpeed: '200',
      visibility: '300'
    },
    daily: [
      {
        date: 'July, 6th, 08:37am',
        day: 'Monday',
        description: 'light rain',
        icon: sunny,
        weatherStatus: 'Sunny',
        humidity: '100',
        windSpeed: '200',
        pressure: '100',
        dayTemp: '0',
        nightTemp: '0',
        mornTemp: '0',
        eveTemp: '0',
        minTemp: '0',
        maxTemp: '0',
      },
    ]
  },
];

const forecastTemplate = {
  forecastList: getData(),//[],
  selectedForecast: null,
  wallpaper: cover,
  tempUnit: 'F',
  openMenu: false,
  setLocalStorage: true
};


function App() {
  const [forecast, dispatcher] = useReducer(reducer, forecastTemplate);

  useEffect(() => {
    if (localStorage.getItem('forecast') && JSON.parse(localStorage.getItem('forecast')).setLocalStorage) {
      dispatcher({ type: 'setForecast', data: JSON.parse(localStorage.getItem('forecast')) })
    }
    else {
      dispatcher({ type: 'setSelectedForecast', data: 0 });
      dispatcher({type:'setLocalStorage', data:true})
    }
  }, [dispatcher])



  useEffect(() => {
    localStorage.setItem('forecast', JSON.stringify(forecast))
  }, [forecast])


  return (
    <div class='h-screen break-words flex flex-col' style={{ overflow: 'hidden', backgroundImage: `url(${forecast.wallpaper})`, backgroundSize: 'cover' }}>
      <NavBar dispatcher={dispatcher} forecast={forecast} />
      <div class="overflow-x-auto">
        <Dashboard forecast={forecast} dispatcher={dispatcher} />
        {forecast.selectedForecast && <Forecast forecast={forecast} dispatcher={dispatcher} />}
        <Options forecast={forecast} dispatcher={dispatcher} />
      </div>
    </div>
  );
}

export default App;


