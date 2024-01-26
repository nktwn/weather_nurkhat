document.addEventListener('DOMContentLoaded', function () {
    const searchForm = document.getElementById('weatherForm');
    const cityNameInput = document.getElementById('cityInput');
    const weatherResult = document.getElementById('weatherResult');
    let map;
    let marker;

    searchForm.addEventListener('submit', async function (event) {
        event.preventDefault();
        const city = cityNameInput.value.trim();
        if (city !== '') {
            try {
                const response = await fetch(`/weather`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ cityName: city }),
                });
                const resultData = await response.json();

                const resultHtml = `
                    <h1>Temperature: ${resultData.temperature}C</h1>
                    <h2>Description: ${resultData.description}</h2>
                    <p>Icon: <img src="https://openweathermap.org/img/wn/${resultData.icon}.png" alt="weather icon"></p>
                    <p>Coordinates: Latitude ${resultData.coordinates.latitude}, Longitude ${resultData.coordinates.longitude}</p>
                    <p>Feels Like Temperature: ${resultData.feelsLike}C</p>
                    <p>Humidity: ${resultData.humidity}%</p>
                    <p>Pressure: ${resultData.pressure} hPa</p>
                    <p>Wind Speed: ${resultData.windSpeed} m/s</p>
                    <p>Country Code: ${resultData.countryCode}</p>
                    <p>Rain Volume (last 3 hours): ${resultData.rainVolumeLast3Hours} mm</p>
                `;

                weatherResult.innerHTML = resultHtml;

                if (!map) {
                    const coordinates = resultData.coordinates;
                    map = L.map('map').setView([coordinates.latitude, coordinates.longitude], 13);

                    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                        attribution: '&copy; OpenStreetMap contributors'
                    }).addTo(map);
                }

                const newCoordinates = resultData.coordinates;
                if (marker) {
                    map.removeLayer(marker);
                }
                marker = L.marker([newCoordinates.latitude, newCoordinates.longitude]).addTo(map);

                map.panTo([newCoordinates.latitude, newCoordinates.longitude]);

            } catch (error) {
                console.error('Error fetching weather data:', error);
            }
        }
    });
});
