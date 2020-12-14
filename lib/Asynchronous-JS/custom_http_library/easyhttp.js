/* eslint-disable node/no-callback-literal */
function easyHTTP() {
  this.http = new XMLHttpRequest();
}

// Make an HTTP GET Request
easyHTTP.prototype.get = function(url, callback) {
  this.http.open('GET', url, true);

  // arrow function would provide us with the lexical 'this' and there would be no need to create the self var
  const self = this;
  this.http.onload = function() {
    if (self.http.status === 200) {
      callback(null, self.http.responseText);
    } else {
      callback(`Error: ${self.http.status}`);
    }
  };

  this.http.send();
};

// Make an HTTP POST Request
easyHTTP.prototype.post = function(url, data, callback) {
  this.http.open('POST', url, true);

  // set content type
  this.http.setRequestHeader('Content-type', 'application/json');

  const self = this;
  this.http.onload = function() {
    callback(null, self.http.responseText);
  };

  this.http.send(JSON.stringify(data));
};

// Make an HTTP PUT Request
easyHTTP.prototype.put = function (url, data, callback) {
  this.http.open('PUT', url, true);

  // set content type
  this.http.setRequestHeader('Content-type', 'application/json');

  const self = this;
  this.http.onload = function () {
    callback(null, self.http.responseText);
  };

  this.http.send(JSON.stringify(data));
};

// Make an HTTP DELETE Request
easyHTTP.prototype.delete = function (url, callback) {
  this.http.open('DELETE', url, true);

  const self = this;
  this.http.onload = function () {
    if (self.http.status === 200) {
      callback(null, 'Post deleted');
    } else {
      callback(`Error: ${self.http.status}`);
    }
  };

  this.http.send();
};
