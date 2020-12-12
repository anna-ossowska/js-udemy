class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

class UI {
  addBookToList(book) {
    // Select the tbody element
    const list = document.getElementById('book-list');
    // Create the tr element
    const row = document.createElement('tr');
    // Insert the user's data
    row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delete">X</td>
    `;

    list.appendChild(row);
  }

  showAlert(msg, className) {
    // Create a div
    const div = document.createElement('div');
    // Add classes
    div.className = `alert ${className}`;
    // Add the text
    div.innerText = msg;
    // Select parent elements
    const form = document.querySelector('#book-form');
    const container = document.querySelector('.container');
    // Insert an alert
    container.insertBefore(div, form);

    // Make the alert disappear after 3 seconds
    setTimeout(function() {
      document.querySelector('.alert').remove();
    }, 3000);
  }

  deleteBook(target) {
    if (target.className === 'delete') {
      // go to td, then to tr (DOM traversing)
      target.parentElement.parentElement.remove();
    }
  }

  clearFields() {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
  }
}

// Event Listener for Add Book
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
    ui.showAlert('Please fill in all the fields', 'error');
  } else {
    // Clear fields
    ui.clearFields();

    // Add book to the list;
    ui.addBookToList(book);

    // Show success
    ui.showAlert('Book added!', 'success');
  }

  e.preventDefault();
});

// Event Listener for delete
// Event delegation: select the parent first
document.getElementById('book-list').addEventListener('click', function(e) {
  // Instantiate the UI
  const ui = new UI();
  ui.deleteBook(e.target);

  // Once it's deleted, show an alert
  ui.showAlert('Book has been removed!', 'success');
  e.preventDefault();
});
