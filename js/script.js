document.addEventListener("DOMContentLoaded", function() {
    // Selecting DOM elements
    const taskInput = document.getElementById("taskInput");
    const addTaskBtn = document.getElementById("addTaskBtn");
    const taskList = document.getElementById("taskList");

    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            const taskItem = document.createElement("li");
            taskItem.textContent = taskText;
            taskList.appendChild(taskItem);
            taskInput.value = "";
            addTaskListeners(taskItem);
        }
    }

    // Function to mark a task as completed
    function toggleTaskCompletion() {
        this.classList.toggle("completed");
    }

    // Function to delete a task
    function deleteTask() {
        this.parentNode.remove();
    }

    // Function to add event listeners to a task item
    function addTaskListeners(taskItem) {
        taskItem.addEventListener("click", toggleTaskCompletion);
        taskItem.addEventListener("contextmenu", function(event) {
            event.preventDefault(); // Prevent the default context menu
            deleteTask.call(this); // Invoke deleteTask with 'this' referring to the task item
        });
    }

    // Event listener for the "Add Task" button
    addTaskBtn.addEventListener("click", addTask);

    // Initial setup: Add event listeners to existing task items
    const existingTasks = document.querySelectorAll("ul#taskList li");
    existingTasks.forEach(addTaskListeners);
});
document.addEventListener("DOMContentLoaded", function() {
    // Selecting DOM elements
    const taskInput = document.getElementById("taskInput");
    const addTaskBtn = document.getElementById("addTaskBtn");
    const taskList = document.getElementById("taskList");

    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            const taskItem = document.createElement("li");
            taskItem.textContent = taskText;
            taskList.appendChild(taskItem);
            taskInput.value = "";
            addTaskListeners(taskItem);
        }
    }

    // Function to mark a task as completed
    function toggleTaskCompletion() {
        this.classList.toggle("completed");
    }

    // Function to delete a task
    function deleteTask() {
        this.parentNode.remove();
    }

    // Function to add event listeners to a task item
    function addTaskListeners(taskItem) {
        taskItem.addEventListener("click", toggleTaskCompletion);
        taskItem.addEventListener("contextmenu", function(event) {
            event.preventDefault(); // Prevent the default context menu
            deleteTask.call(this); // Invoke deleteTask with 'this' referring to the task item
        });
    }

    // Event listener for the "Add Task" button
    addTaskBtn.addEventListener("click", addTask);

    // Initial setup: Add event listeners to existing task items
    const existingTasks = document.querySelectorAll("ul#taskList li");
    existingTasks.forEach(addTaskListeners);
});
