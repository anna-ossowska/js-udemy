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
  // DOM Load event
  // DOMContentLoaded event fires when the HTML document has been loaded and parsed
  document.addEventListener('DOMContentLoaded', getTasks);
  // Add Task event
  form.addEventListener('submit', addTask);
  // Remove Task event
  taskList.addEventListener('click', removeTask);
  // Clear Task event
  clearBtn.addEventListener('click', clearTasks);
  // Filter Through Task event
  filter.addEventListener('keyup', filterTasks);
};

// Get tasks from the Local Storage
function getTasks() {
  let tasks;
  // check the Local Storage if there any tasks in here
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    // when receiving the data from a web server, the data is always a string
    // parse it to make it a JSON object
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  // loop through the tasks that are present in the Local Storage
  tasks.forEach(function(task) {
    // Create li element
    const li = document.createElement('li');
    // Give li class name of collection-item (materialize documentation)
    li.className = 'collection-item';
    // Create textNode and append to li
    li.appendChild(document.createTextNode(task));
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
  });
}

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

  // Store in the Local Storage
  storeTaskInLocalStorage(taskInput.value);

  // Clear the input
  taskInput.value = '';

  // Prevent the reload
  e.preventDefault();
};

// Store the task
function storeTaskInLocalStorage(task) {
  let tasks;
  // check if there are any tasks in the Local Storage
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    // when receiving the data from a web server, the data is always a string
    // parse it to make it a JSON object
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  tasks.push(task);
  // persist the data and stringify back
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function removeTask(e) {
  if (e.target.parentElement.classList.contains('delete-item')) {
    if (confirm('Are you sure?')) {
      e.target.parentElement.parentElement.remove();

      // Remove from the Local Storage
      // since we have no id, we need to pass e.target.parentElement.parentElement as an argument
      removeTaskFromLocalStorage(e.target.parentElement.parentElement);
    }
  }
}

// Remove from the Local Storage
// taskItem is a <li> element
function removeTaskFromLocalStorage(taskItem) {
  let tasks;
  // check if there are any tasks in the Local Storage
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    // when receiving the data from a web server, the data is always a string
    // parse it to make it a JSON object
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.forEach(function(task, index) {
    // if <li>textContent</li> matches text in the iteration, delete it
    if (taskItem.textContent === task) {
      tasks.splice(index, 1);
    }
  });

  // set the Local Storage again
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function clearTasks (e) {
  // 1st solution
  // taskList.innerHTML = '';

  // 2nd solution, performing much faster
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }

  // Clear the Local Storage
  clearTasksFromLocalStorage();
}

// Clear the Local Storage
function clearTasksFromLocalStorage() {
  localStorage.clear();
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
