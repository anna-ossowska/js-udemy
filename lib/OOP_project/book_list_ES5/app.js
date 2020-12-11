// Book constructor (handling the Book object)

function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

// UI constructor (setting the prototype to do things like: add book to the list, delete the book, show the alert)
function UI() {};

// Create Add Book to List function
UI.prototype.addBookToList = function(book) {
  // Select tbody element
  const list = document.getElementById('book-list');
  // Create tr element
  const row = document.createElement('tr');
  // Insert the user's data
  row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delete">X<a></td>
  `;
  list.appendChild(row);
};

// Show alert
UI.prototype.showAlert = function(msg, className) {
  // Create a div
  const div = document.createElement('div');
  // Add classes
  div.className = `alert ${className}`;
  // Add text
  div.appendChild(document.createTextNode(msg));
  const container = document.querySelector('.container');
  const form = document.querySelector('#book-form');
  // Insert alert
  container.insertBefore(div, form);

  // make the alert disappear after 3 seconds
  setTimeout(function() {
    document.querySelector('.alert').remove();
  }, 3000);
};

// Clear fields
UI.prototype.clearFields = function() {
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  document.getElementById('isbn').value = '';
};

// Event Listeners
document.getElementById('book-form').addEventListener('submit', function(e) {
  // Get the input values
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const isbn = document.getElementById('isbn').value;

  // Instantiate the book
  const book = new Book(title, author, isbn);

  // Instantiate the UI
  const ui = new UI();

  // Validate
  if (title === '' || author === '' || isbn === '') {
    // Error alert
    ui.showAlert('Pease fill in all the fields', 'error');
  } else {
    // Clear fields
    ui.clearFields();

    // Add book to the list
    ui.addBookToList(book);

    // Show success
    ui.showAlert('Book added!', 'success');
  }

  e.preventDefault();
});
