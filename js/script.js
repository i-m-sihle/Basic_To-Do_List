document.addEventListener("DOMContentLoaded", function() {
    const taskInput = document.getElementById("taskInput");
    const addTaskBtn = document.getElementById("addTaskBtn");
    const taskList = document.getElementById("taskList");

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            const taskItem = document.createElement("li");

            // Create task text
            const taskTextElement = document.createElement("span");
            taskTextElement.textContent = taskText;
            taskItem.appendChild(taskTextElement);

            // Create completed button
            const deleteButton = document.createElement("button");
            deleteButton.textContent = "Completed";
            deleteButton.classList.add("deleteButton");
            deleteButton.addEventListener("click", deleteTask);

            // Append task text and delete button to task item
            taskItem.appendChild(deleteButton);

            taskList.appendChild(taskItem);
            taskInput.value = "";
        }
    }

    function toggleTaskCompletion() {
        this.classList.toggle("completed");
    }

    function deleteTask() {
        this.parentNode.remove();
    }

    function addTaskListeners(taskItem) {
        taskItem.addEventListener("click", toggleTaskCompletion);
    }

    addTaskBtn.addEventListener("click", addTask);

    const existingTasks = document.querySelectorAll("ul#taskList li");
    existingTasks.forEach(function(taskItem) {
        addTaskListeners(taskItem);
    });
});
