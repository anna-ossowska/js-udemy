// Book constructor (handling the Book object)

function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

// UI constructor (set of prototypes to do things like: add book to the list, delete the  book, show the alert)
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

  // Clear fields
  ui.clearFields();

  // Add book to the list
  ui.addBookToList(book);

  e.preventDefault();
});
