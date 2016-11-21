const API_KEY = '0f39e5392290578788165eeac5ae55bc';
import axios from 'axios';

export const FETCH_WEATHER = 'FETCH_WEATHER';

export default function fetchWeather(city) {

    const ROOT_URL = 'https://api.openweathermap.org/data/2.5/forecast?q=';
    const url = `${ROOT_URL}${city},us&appid=${API_KEY}`;
    console.log(url);    
    
    const request = axios.get(url);
    return {
        type: FETCH_WEATHER,
        payload: request
    }
} 