/* eslint-disable no-unused-vars */
class UI {
  constructor() {
    this.location = document.getElementById('w-location');
    this.country = document.querySelector('.w-country');
    this.temp = document.getElementById('w-temp');
    this.string = document.getElementById('w-string');
    this.feelsLike = document.getElementById('w-feels-like');
    this.pressure = document.getElementById('w-pressure');
    this.wind = document.getElementById('w-wind');
    this.icon = document.getElementById('w-icon');
  }

  // Fill the UI with the results
  paint(weather) {
    const country = this.country.innerHTML = ', ' + weather.sys.country;
    this.location.innerHTML = weather.name + country;
    this.temp.innerHTML = weather.main.temp + '°C';
    this.string.innerHTML = weather.weather[0].description;
    this.feelsLike.innerHTML = '<strong>Feels like: </strong>' + weather.main.feels_like + '°C';
    this.pressure.innerHTML = '<strong>Pressure: </strong>' + weather.main.pressure + ' hPa';
    this.wind.innerHTML = '<strong>Wind: </strong>' + weather.wind.speed + ' m/s';
    this.icon.setAttribute('src', `http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`);
  }
}
