// Get the form elements
const taskInput = document.getElementById("task-input");
const prioritySelect = document.getElementById("priority-select");
const addButton = document.getElementById("add-button");

// Get the task list element
const taskList = document.getElementById("task-list");

// Create an array to store the tasks
let tasks = [];

// Add an event listener for the Add button
addButton.addEventListener("click", function(event) {
  event.preventDefault();

  // Get the task input and priority
  const taskText = taskInput.value;
  const taskPriority = prioritySelect.value;

  // Create a new task object
  const task = {
    text: taskText,
    priority: taskPriority,
    done: false
  };

  // Add the task to the array and update the task list
  tasks.push(task);
  updateTaskList();
});

// Update the task list on the page
function updateTaskList() {
  // Clear the existing task list
  taskList.innerHTML = "";

  // Add each task to the task list
  tasks.forEach(function(task, index) {
    // Create a new list item for the task
    const taskItem = document.createElement("li");
    taskItem.classList.add("task");

    // Set the task text and priority
    const taskText = document.createElement("div");
    taskText.classList.add("task-text");
    taskText.innerText = task.text;
    taskItem.appendChild(taskText);

    const taskPriority = document.createElement("div");
    taskPriority.classList.add("task-priority");
    taskPriority.classList.add(task.priority);
    taskPriority.innerText = task.priority.charAt(0).toUpperCase() + task.priority.slice(1);
    taskItem.appendChild(taskPriority);

    // Create a button to delete the task
    const deleteButton = document.createElement("button");
    deleteButton.classList.add("task-delete");
    deleteButton.innerText = "Delete";
    deleteButton.addEventListener("click", function() {
      tasks.splice(index, 1);
      updateTaskList();
    });
    taskItem.appendChild(deleteButton);

    // Add the task item to the task list
    taskList.appendChild(taskItem);
  });
}
