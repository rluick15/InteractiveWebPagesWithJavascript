var taskInput = document.getElementById("new-task");
var addButton = document.getElementsByTagName("button")[0];
var incompleteTaskHolder = document.getElementById("incomplete-tasks");
var completedTasksHolder = document.getElementById("complete-tasks");

var addTask = function() {
    console.log("Add task");
}

var editTask = function() {
    console.log("Edit task");
}

var deleteTask = function() {
    console.log("Delete task");
}

var taskCompleted = function() {
    console.log("Task incomplete");
}

var taskIncomplete = function() {
    console.log("Task complete");
}

addButton.onclick = addTask;


