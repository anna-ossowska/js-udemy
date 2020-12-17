/* eslint-disable no-unused-vars */
class UI {
  constructor() {
    this.location = document.getElementById('w-location');
    this.country = document.querySelector('.w-country');
    this.temp = document.getElementById('w-temp');
    this.string = document.getElementById('w-string');
    this.rain = document.getElementById('w-rain');
    this.feelsLike = document.getElementById('w-feels-like');
    this.wind = document.getElementById('w-wind');
    this.icon = document.getElementById('w-icon');
  }

  // Fill the UI with the results
  paint(weather) {
    const country = this.country.innerHTML = ', ' + weather.sys.country;
    this.location.innerHTML = weather.name + country;
    this.temp.innerHTML = weather.main.temp + '°C';
    this.string.innerHTML = weather.weather[0].description;
    this.rain.innerHTML = '<strong>Rain: </strong>' + weather.rain['1h'] + 'mm/h';
    this.feelsLike.innerHTML = '<strong>Feels like: </strong>' + weather.main.feels_like + '°C';
    this.wind.innerHTML = '<strong>Wind: </strong>' + weather.wind.speed + 'm/s';
    this.icon.setAttribute('src', `http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`);
  }
}
