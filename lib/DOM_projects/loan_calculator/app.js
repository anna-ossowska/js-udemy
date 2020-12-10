// Listen for submit
// Delay the calclateResults
document.getElementById('loan-form').addEventListener('submit', function(e) {
  // Hide results
  document.getElementById('results').style.display = 'none';

  // Show loader
  document.getElementById('loading').style.display = 'block';

  // Show calculateResults after 2s
  setTimeout(calculateResults, 2000);

  e.preventDefault();
});

function calculateResults() {
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

    // Show the results
    document.getElementById('results').style.display = 'block';

    // Hide the loader .gif
    document.getElementById('loading').style.display = 'none';
  } else {
    showError('Please make sure you provide the correct data');
  }
}

function showError(error) {
  // Show the results
  document.getElementById('results').style.display = 'none';

  // Hide the loader .gif
  document.getElementById('loading').style.display = 'none';

  // Create a div
  const errorDiv = document.createElement('div');

  // Get the card element
  const card = document.querySelector('.card');
  const heading = document.querySelector('.heading');

  // Add a Bootsrap class to create an alert
  errorDiv.className = 'alert alert-danger';

  // Create a textNode
  errorDiv.innerText = error;

  // Insert error above heading
  card.insertBefore(errorDiv, heading);

  // Clear error after 3 seconds, make it disappear
  setTimeout(clearError, 3000);
}

function clearError() {
  document.querySelector('.alert').remove();
}
