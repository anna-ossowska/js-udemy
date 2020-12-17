// initialize the Weather object
const weather = new Weather('Oslo');

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

// weather.changeLocation('Stavanger');

function getWeather() {
  weather.getWeather()
    .then(results => console.log(results))
    .catch(err => console.log(err));
}