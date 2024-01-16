document.addEventListener("DOMContentLoaded", function () {
    const taskForm = document.getElementById("taskForm");
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");

    taskForm.addEventListener("submit", function (e) {
        e.preventDefault();
        addTask();
    });

    taskList.addEventListener("click", function (e) {
        if (e.target.tagName === "LI") {
            toggleTaskStatus(e.target);
        }
    });

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            const taskItem = document.createElement("li");
            taskItem.textContent = taskText;
            taskList.appendChild(taskItem);
            taskInput.value = "";
        }
    }

    function toggleTaskStatus(taskItem) {
        taskItem.classList.toggle("completed");
    }
});