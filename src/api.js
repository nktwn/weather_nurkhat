const express = require('express');
const app = express();
const path = require('path');
const weather = require('./weather');

app.use(express.static(path.join(__dirname, '../public')));

app.use(express.json());

app.post('/weather', async (req, res) => {
    try {
        const cityName = req.body.cityName;
        const weatherData = await weather.getWeatherData(cityName);
        res.json(weatherData);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});