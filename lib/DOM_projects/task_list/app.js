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
function loadEventListeners() {
  // Add Task event
  form.addEventListener('submit', addTask);
  // Remove Task event
  taskList.addEventListener('click', removeTask);
  // Clear Task event
  clearBtn.addEventListener('click', clearTasks);
  // Filter Through Task event
  filter.addEventListener('keyup', filterTasks);
};

// addTask callback function
function addTask(e) {
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

function removeTask(e) {
  if (e.target.parentElement.classList.contains('delete-item')) {
    if (confirm('Are you sure?')) {
      e.target.parentElement.parentElement.remove();
    }
  }
}

function clearTasks (e) {
  // 1st solution
  // taskList.innerHTML = '';

  // 2nd solution, performing much faster
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }
}

function filterTasks (e) {
  const text = e.target.value.toLowerCase();
  // we get the NodeList
  document.querySelectorAll('.collection-item').forEach(function(task) {
    const item = task.firstChild.textContent;
    if (item.toLowerCase().indexOf(text) !== -1) {
      task.style.display = 'block';
    } else {
      task.style.display = 'none';
    }
  });
}
