import axios from 'axios';
import { getKeyValue, TOKEN_DICTIONARY } from './storage.service.js';

const getIcon = (icon) => {
    switch (icon.slice(0, -1)) {
        case '01':
            return '☀'
        case '02':
            return '☼'
        case '03':
            return '☁'
        case '50':
            return '🌫'
    }
};

const getWeather = async () => {
    const token = await getKeyValue(TOKEN_DICTIONARY.token);
    const city = await getKeyValue(TOKEN_DICTIONARY.city);

    if (!token) {
        throw new Error('API key not set, set it by -t [API_KEY]');
    }

    const { data } = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
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
    getIcon,
};