console.log("works");
// create function to add item to list

//select DOM items
let taskInput = document.getElementById('taskForm');
let addTaskButton = document.getElementById('addTaskButton');
let taskList = document.getElementById("taskList");

// 
function addItem() {
  console.log(taskInput.value);

  // check if form has text, and caputure text value of form
  if(taskInput.value !== '') {
    let taskItem = document.createElement('li');
    taskItem.textContent = taskInput.value;

    // add item to list when user clicks addTaskButton button
    taskList.appendChild(taskItem);
  }

}

function removeItem() {
  
}

function updateItem() {
  
}



document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("addTaskButton").addEventListener("click", addItem);
});