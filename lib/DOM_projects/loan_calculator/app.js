/* eslint-disable node/handle-callback-err */
// Listen for submit
document.getElementById('loan-form').addEventListener('submit', calculateResults);

function calculateResults(e) {
  console.log('Calculating...');
  // UI variables
  const amount = document.getElementById('amount');
  const interest = document.getElementById('interest');
  const years = document.getElementById('years');
  const monthlyPayment = document.getElementById('monthly-payment');
  const totalPayment = document.getElementById('total-payment');
  const totalInterest = document.getElementById('total-interest');

  // Make it a float
  const principal = parseFloat(amount.value);
  const calculatedInterest = parseFloat(interest.value) / 100 / 12;
  const calculatedPayments = parseFloat(years.value) * 12;

  // Compute the monthly payment
  const x = Math.pow(1 + calculatedInterest, calculatedPayments);
  const monthly = (principal * x * calculatedInterest) / (x - 1);

  // Check if mothly is a finite number
  if (isFinite(monthly)) {
    monthlyPayment.value = monthly.toFixed(2);
    totalPayment.value = (monthly * calculatedPayments).toFixed(2);
    totalInterest.value = ((monthly * calculatedPayments) - principal).toFixed(2);
  } else {
    showError('Please make sure you provide the correct data');
  }

  e.preventDefault();
}

function showError(error) {
  // Create a div
  const errorDiv = document.createElement('div');

  // Get the card element
  const card = document.querySelector('.card');
  const heading = document.querySelector('.heading');

  // Add a Bootsrap class to create an alert
  errorDiv.className = 'alert alert-danger';

  // Create a textNode
  errorDiv.innerText = error;
  console.log(errorDiv);

  // Insert error above heading
  card.insertBefore(errorDiv, heading);
}
