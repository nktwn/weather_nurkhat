# Weather App by Sergaziyev Nurkhat

## How to Install

1. Clone the project from Github.
2. Navigate to the project directory.
3. Install dependencies using `npm install`.
4. Start the local server using `node src/api.js`.
5. Open your browser and go to [http://localhost:3000/](http://localhost:3000/).

**Note:** The server runs on port 3000. If you encounter any conflicts with other projects using the same port, consider changing the port in the server configuration.

## Description

This project is a Weather App that allows users to get real-time weather information for a specific city. The application displays temperature, weather description, feels-like temperature, humidity, pressure, wind speed, country code, rain volume (last 3 hours), and points of interest in the city. Additionally, the app provides a map view of the city with a marker indicating its coordinates.

## Project Structure
```
/weather_app
├── /public
│ ├── /css
│ │ └── style.css
│ ├── /js
│ │ └── script.js
│ ├── /images
│ │ └── logo.png
│ ├── index.html
├── /src
│ ├── api.js
│ ├── weather.js
├── package.json
├── package-lock.json
└── README.md
```


## Dependencies and npm Packages

- `express`: Web application framework for Node.js
- `axios`: Promise-based HTTP client for the browser and Node.js
- `leaflet`: Leading open-source JavaScript library for mobile-friendly interactive maps
- `body-parser`: Middleware to parse incoming request bodies
- `bootstrap`: Front-end framework for styling
- `leaflet`: JavaScript library for DOM manipulation
- `leaflet.css`: Stylesheet for leaflet library


## How to Use

1. Enter the city name in the search form.
2. Click on the "Search" button.
3. View detailed weather information and points of interest.
4. Explore the map with a marker indicating the city's location.


