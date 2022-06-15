document.addEventListener("DOMContentLoaded", () => {
  // your code here

  //assign necessary DOM elements to variables
  const newTaskForm = document.getElementById("create-task-form");
  const newTaskDescription = document.getElementById("new-task-description");
  //ul where tasks will be appended to in the DOM
  const newTaskUnorderedList = document.getElementById("tasks");

  const createNewTask = event => {
    //stop form from trying to submit
    event.preventDefault();

    const newTask = document.createElement("li");
    newTask.innerText = newTaskDescription.value;
    newTaskUnorderedList.appendChild(newTask);
    event.target.reset();
  };

  //attach event listeners
  newTaskForm.addEventListener("submit", createNewTask);

});

