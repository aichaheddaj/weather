const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=essaouira&appid=76ef0919dfda701c6deff3e5959355cd';

const weatherlong = document.querySelector('.weather span');
const weatherlat = document.querySelector('.weather p');

const temperatureDiv = document.querySelector('.temperature p');
const humidityDiv = document.querySelector('.hum p');
const windDiv = document.querySelector('.vent p');

function Weather() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', apiUrl, true);
    xhr.onload = function () {
        if (xhr.status == 200 && xhr.readyState==4) {
            const data = JSON.parse(xhr.responseText);

            weatherlong.textContent = `Longitude: ${getRandomNumber(-180, 180).toFixed(2)}`;
            weatherlat.textContent = `Latitude: ${getRandomNumber(-90, 90).toFixed(2)}`;

            temperatureDiv.textContent = `${getRandomNumber(-20, 60).toFixed(2)}°C`;
            humidityDiv.textContent = `${getRandomNumber(0, 100).toFixed(2)}%`;
            windDiv.textContent = `${getRandomNumber(0, 200).toFixed(2)} km/h`;
        } 
    };
    xhr.send();
}

function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
}

window.onload = Weather();
