import {
  parseJSONFromLocalStorage,
  stringifyJSONToLocalStorage,
} from "./utils/localStorage.js";

const form = document.querySelector(".addTaskForm");

form.onsubmit = function (event) {
  event.preventDefault();
  //newtask const erstellen
  const newTask = { title: "", date: "", isDone: false };
  //const checkDateinput erstellen
  const checkedDateInput = document.querySelector(
    ".addTaskForm__radio:checked"
  );
  //const inputfeld
  const textInput = document.querySelector(".addTaskForm__textInput");
  // newTask title = textinputvalue
  newTask.title = textInput.value;
  // newTask date = value der checkboxen
  newTask.date = checkedDateInput.value;
  // variable erstellt die den newTask in einem array erstellt
  let taskArray = [newTask];

  /*console.log(
    `Hi you entered "${newTask.date}" as date and "${newTask.title}" as description`
  );*/
  console.log(newTask);
  // JSON geparsed
  const oldTasks = parseJSONFromLocalStorage("tasks", []);
  taskArray = oldTasks;
  //taskArray gepusht um in der Liste zu erscheinen
  taskArray.push(newTask);
  stringifyJSONToLocalStorage("tasks", taskArray);

  window.location = "index.html";
};
