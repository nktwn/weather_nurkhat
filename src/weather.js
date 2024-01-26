const axios = require('axios');

const openWeatherApiKey = '5291eefa398029c38b952d4a10671a3e';
const opentripmapApiKey = '5ae2e3f221c38a28845f05b66938d71bb7778874086ac181360e34f7';

async function getWeatherData(city) {
    try {
        const weatherResponse = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${openWeatherApiKey}&units=metric`);
        const coordinates = await getCoordinates(city);
        const pointsOfInterest = await getPointsOfInterest(city);

        return {
            temperature: weatherResponse.data.main.temp,
            description: weatherResponse.data.weather[0].description,
            feelsLike: weatherResponse.data.main.feels_like,
            humidity: weatherResponse.data.main.humidity,
            pressure: weatherResponse.data.main.pressure,
            windSpeed: weatherResponse.data.wind.speed,
            countryCode: weatherResponse.data.sys.country,
            rainVolumeLast3Hours: weatherResponse.data.rain ? weatherResponse.data.rain['3h'] || 0 : 0,
            icon: weatherResponse.data.weather[0].icon,
            coordinates: coordinates,
            pointsOfInterest: pointsOfInterest,
        };
    } catch (error) {
        throw error;
    }
}

async function getCoordinates(city) {
    try {
        const coordinatesResponse = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${openWeatherApiKey}&units=metric`);
        const { lat, lon } = coordinatesResponse.data.coord;
        return { latitude: lat, longitude: lon };
    } catch (error) {
        throw error;
    }
}

async function getPointsOfInterest(city) {
    try {
        const poiResponse = await axios.get(`https://api.opentripmap.com/0.1/en/places/geoname?name=${city}&apikey=${opentripmapApiKey}`);
        return poiResponse.data;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    getWeatherData,
};