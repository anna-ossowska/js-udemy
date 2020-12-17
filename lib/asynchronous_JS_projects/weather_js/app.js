/* eslint-disable no-undef */

// Initialize the localStorage object
const storage = new Storage();

// Get stored location data
const weatherLocation = storage.getLocationData();

// Initialize the Weather object
const weather = new Weather(weatherLocation.city);

// Initialize the UI object
const ui = new UI();

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

// Change location event
document.getElementById('w-change-btn').addEventListener('click', (e) => {
  // Get the user's input
  const city = document.getElementById('city').value;

  // Change location
  weather.changeLocation(city);

  // Set location in Local Storage
  storage.setLocationData(city);

  // Get and display weather
  getWeather();

  // Close the modal, we need to use jQuery
  $('#locModal').modal('hide');
});

function getWeather() {
  weather.getWeather()
    .then(results => {
      ui.paint(results);
    })
    .catch(err => console.log(err));
}
