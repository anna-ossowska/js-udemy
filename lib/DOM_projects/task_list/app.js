/* eslint-disable no-unused-vars */

// Define UI variables
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.getElementById('filter');
const taskInput = document.getElementById('task');

console.log(filter);

// Load all event listeners
loadEventListeners();

// Load all event listeners
function loadEventListeners () {
  form.addEventListener('submit', addTask);
};

// addTask callback function
function addTask (e) {
  if (taskInput.value === '') {
    alert('Add a task');
  }
  // Create li element
  const li = document.createElement('li');
  // Give li class name of collection-item (materialize documentation)
  li.className = 'collection-item';
  // Create textNode and append to li
  li.appendChild(document.createTextNode(taskInput.value));
  // Create a link for the delete functionality
  const link = document.createElement('a');
  // Add a class to the link; secondary-content comes from the materialize documentation
  link.className = 'delete-item secondary-content';
  // Add FontAwesome delete icon
  link.innerHTML = '<i class="fa fa-remove"></i>';
  // Append the link to li
  li.appendChild(link);

  // Append li to ul
  taskList.appendChild(li);

  // Clear the input
  taskInput.value = '';
  // Prevent the reload
  e.preventDefault();
};
