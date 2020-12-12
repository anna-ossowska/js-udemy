document.getElementById('button').addEventListener('click', loadData);

function loadData() {
  // Create an XHR Object
  const xhr = new XMLHttpRequest();

  // OPEN
  // type of request | file you want to read | make asynchronous?
  xhr.open('GET', 'data.txt', true);

  // console.log('READYSTATE', xhr.readyState); // READYSTATE 1

  // Optional - used for spinners/loaders
  xhr.onprogress = function() {
    console.log('READYSTATE', xhr.readyState); // READYSTATE 3
  };

  // ONLOAD
  // New syntax:
  xhr.onload = function() {
    console.log('READYSTATE', xhr.readyState); // READYSTATE 4
    // make sure the status is equal to 200
    if (this.status === 200) {
      // console.log(this.responseText); // 'Some plain text data'
      document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`;
    }
  };

  // Old sytax:
  // xhr.onreadystatechange = function() {
  //   console.log('READYSTATE', xhr.readyState); // READYSTATE 1 2 3 4
  //   if (this.status === 200 && this.readyState === 4) {
  //     console.log(this.responseText);
  //   }
  // };

  // Runs only if errors
  xhr.onerror = function() {
    console.log('Request error');
  };

  // SEND THE REQUEST
  xhr.send();
};

// readyState Values
// 0: request not initialized
// 1: server connection established
// 2: request received
// 3: processing request
// 4: request finished and response is ready

// HTTP Statuses:
// 200: "OK"
// 403: "Forbidden"
// 404: "Not Found"
