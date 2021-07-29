// Display sleceted date onclick, button not part of form
// const altButton = document.querySelector(".addTask__alternativeButton");

// altButton.onclick = alertSelectedDate;

// Display sleceted date onsubmit, using submit button
const form = document.querySelector(".addTaskForm");

form.onsubmit = function (event) {
  event.preventDefault();

  const newTask = { title: "", date: "", isDone: false };

  const checkedDateInput = document.querySelector(
    ".addTaskForm__radio:checked"
  );
  const textInput = document.querySelector(".addTaskForm__textInput");

  newTask.title = textInput.value;
  newTask.date = checkedDateInput.value;

  // template literals
  console.log(
    `Hi you entered "${newTask.date}" as date and "${newTask.title}" as description`
  );
  console.log(newTask);
};
