#!/usr/bin/env node
import { printHelp, printError, printSuccess, printWeather, saveKeyValue, getWeatherIcon, getWeather } from './services/index.js';
import { getCLIArgs } from './helpers/index.js';
import { TOKEN_DICTIONARY } from "./constants/index.js";

const saveToken = async (token) => {
    if (!token.length) {
        printError('Token was not passed');
        return;
    }
    try {
        await saveKeyValue(TOKEN_DICTIONARY.token, token);
        printSuccess('Token was saved');
    } catch (e) {
        printError(e.message);
    }
};

const saveCity = async (city) => {
    if (!city.length) {
        printError('City was not passed');
        return;
    }
    try {
        await saveKeyValue(TOKEN_DICTIONARY.city, city);
        printSuccess('City was saved');
    } catch (e) {
        printError(e.message);
    }
};

const getForecast = async () => {
    try {
        const response = await getWeather();
        printWeather(response, getWeatherIcon(response.weather[0].icon));
    } catch (e) {
        if (e.response?.status === 404) {
            printError('Invalid city');
        } else if (e.response?.status === 401) {
            printError('Invalid token');
        } else {
            printError(e.message);
        }
    }
};

const initCLI = () => {
    const { h,c,t } = getCLIArgs(process.argv);

    if (h) {
        return printHelp();
    }
    if (c) {
        return saveCity(c);
    }
    if (t) {
        return saveToken(t);
    }

    return getForecast();
};

initCLI();