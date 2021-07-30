import { parseJSONFromLocalStorage } from "./utils/localStorage.js";
import { stringifyJSONToLocalStorage } from "/utils/localStorage.js";

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

  let taskArray = [newTask];

  console.log(
    `Hi you entered "${newTask.date}" as date and "${newTask.title}" as description`
  );
  console.log(newTask);

  const oldTask = parseJSONFromLocalStorage("tasks", []);
  taskArray = oldTask;
  taskArray.push(newTask);
  stringifyJSONToLocalStorage("tasks", taskArray);

  window.location = "index.html";
};
