import axios from 'axios';

const API_KEY = '0f39e5392290578788165eeac5ae55bc';
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {

    const ROOT_URL = 'http://api.openweathermap.org/data/2.5/forecast?q=';
    const url = `${ROOT_URL}${city},us&appid=${API_KEY}`;
    console.log(url);    
    
    const request = axios.get(url);
    console.log(request);                    

    return {
        type: FETCH_WEATHER,
        payload: request
    };
} 