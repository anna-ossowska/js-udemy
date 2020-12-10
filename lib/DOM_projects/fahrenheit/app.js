// This mini app is converting the temperature in Celcius to Fahrenheit

// UI variables
const convert = document.querySelector('.convert-form');
const celciusInput = document.getElementById('celcius');
const results = document.querySelector('.results');
const loader = document.querySelector('.loader');
const farhenInput = document.getElementById('fahrenheit');

convert.addEventListener('submit', function(e) {
  loader.style.display = 'block';
  // Show temp converted to Fahrenheit after 1.5s
  setTimeout(convertCelcius, 1500);
  e.preventDefault();
});

// Convert Celcius to Fahrenheit
function convertCelcius() {
  const inputValue = parseFloat(celciusInput.value);
  // Convert Celcius to Fahrenheit
  // Make sure the output has two decimal places
  const toFahren = ((inputValue * 9 / 5) + 32).toFixed(2);

  // If input value is NaN or is nothing run an alert
  // Else display the converted value in the Fahrenheit input box
  if (isNaN(inputValue) === true || inputValue === null) {
    errorMsg('Please provide a number as an input.');
    loader.style.display = 'none';
  } else {
    farhenInput.value = toFahren;
    results.style.display = 'block';
    loader.style.display = 'none';
  }
}

// Set error message as a Bootstrap alert
function errorMsg(error) {
  const header = document.getElementById('header');
  const card = document.querySelector('.card');

  // Create a div
  const errorDiv = document.createElement('div');
  // Insert the Bootsrap classes
  errorDiv.className = 'alert alert-warning';
  // Pass in the error msg
  errorDiv.innerText = error;
  // Place the alert on the top of the card
  card.insertBefore(errorDiv, header);

  // Make the alert disappear after 3.5s
  setTimeout(clearError, 3500);
}

// Clear error
function clearError() {
  document.querySelector('.alert').remove();
}
