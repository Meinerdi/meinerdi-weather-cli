import axios from 'axios';

import { getKeyValue } from './storage.service.js';
import { WEATHER_API_PATH, TOKEN_DICTIONARY } from "../constants/index.js";

const getWeatherIcon = (icon) => {
    switch (icon.slice(0, -1)) {
        case '01':
            return '☀'
        case '02':
            return '☼'
        case '03':
            return '☁'
        case '50':
            return '🌫'
        default:
            return '☀'
    }
};

const getWeather = async () => {
    const token = await getKeyValue(TOKEN_DICTIONARY.token);
    const city = await getKeyValue(TOKEN_DICTIONARY.city);

    if (!token) {
        throw new Error('API key not set, set it by -t [API_KEY]');
    }

    const { data } = await axios.get(WEATHER_API_PATH, {
        params: {
            q: city,
            appid: token,
            lang: 'en',
            units: 'metric'
        }
    });

    return data;
};

export {
    getWeather,
    getWeatherIcon,
};