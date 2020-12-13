document.getElementById('button1').addEventListener('click', loadCustomer);

function loadCustomer(e) {
  // create an XHR request
  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'customer.json', true);

  xhr.onload = function() {
    if (this.status === 200) {
      // console.log(this.responseText);

      // parse as an object
      const customer = JSON.parse(this.responseText);

      const output = `
        <ul>
          <li>ID: ${customer.id}</li>
          <li>${customer.name}</li> 
          <li>${customer.company}</li>
          <li>${customer.phone}</li>
        </ul>
      `;
      // output to the browser
      document.getElementById('customer').innerHTML = output;
    }
  };

  xhr.send();
}

document.getElementById('button2').addEventListener('click', loadCustomers);

function loadCustomers(e) {
  // create an XHR request
  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'customers.json', true);

  xhr.onload = function() {
    if (this.status === 200) {
      const customers = JSON.parse(this.responseText);

      // create a var to be reassigned inside the loop
      let output;

      customers.forEach(function(customer) {
        // append with each iteration
        output += `
        <ul>
          <li>${customer.id}</li>
          <li>${customer.name}</li>
          <li>${customer.company}</li>
          <li>${customer.phone}</li>
          <hr>
        </ul>
        `;
      });
      // output in the browser
      document.getElementById('customers').innerHTML = output;
    }
  };

  xhr.send();
}
