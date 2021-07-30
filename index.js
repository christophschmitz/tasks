import { parseJSONFromLocalStorage } from "./utils/localStorage.js";
const menuButton = document.querySelector(".menuButton");
menuButton.onclick = sendAlert;

function sendAlert() {
  alert("Hello World");
}
const tasklist = document.querySelector(".taskList");

const tasks = parseJSONFromLocalStorage("tasks", []);
const taskListItems = tasks.map((task) => createTaskListItem(task));

// const taskOne = createTaskListItem("Kaffee kochen");
// const taskTwo = createTaskListItem("Hund ausführen");
tasklist.append(...taskListItems);

function createTaskListItem(task) {
  const taskListItem = document.createElement("label");
  const input = document.createElement("input");
  const span = document.createElement("span");

  taskListItem.className = "taskItem";

  input.className = "taskItem__checkbox";
  input.type = "checkbox";
  input.setAttribute("name", "tasks");
  input.checked = task.isDone;

  span.className = "taskItem__labelText";
  span.innerText = task.title;

  taskListItem.append(input, span);

  return taskListItem;
}
