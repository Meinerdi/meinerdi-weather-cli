import chalk from 'chalk';
import dedent from 'dedent-js';

const printError = (error) => {
    console.log(`${chalk.bgRed(`ERROR:`)} ${error}`);
};

const printSuccess = (message) => {
    console.log(`${chalk.bgGreen(` SUCCESS `)} ${message}`);
};

const printHelp = () => {
    console.log(
        dedent`${chalk.bgCyan(' HELP ')}
         Without parameters - show weather in current region
         -s [CITY] - for set city
         -h - for show help
         -t [API-KEY] - for set API token
        `
    );
};

const printWeather = (response, icon) => {
    console.log(
        dedent`${chalk.bgYellow(' Weather ')} Weather in the city ${response.name}
        ${icon}  ${response.weather[0].description}
        Temperature: ${response.main.temp} (fills like ${response.main.feels_like})
        Humidity: ${response.main.humidity} %
        Wind speed: ${response.wind.speed}
        `
    );
};

export {
    printError,
    printSuccess,
    printHelp,
    printWeather,
};