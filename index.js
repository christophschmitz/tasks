import { parseJSONFromLocalStorage } from "./utils/localStorage.js";

let taskList = document.querySelector(".taskList");

const tasks = parseJSONFromLocalStorage("tasks", []);

let tasksArr = tasks.map((task) => createTaskListItem(task));

taskList.append(...tasksArr);

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

function onClickFilter(date) {
  const filteredTasks = tasks.filter((task) => task.date === date);
  tasksArr = filteredTasks.map((task) => createTaskListItem(task));
  taskList.innerHTML = "";
  taskList.append(...tasksArr);
}

const radios = document.querySelectorAll(".dateselect__input");

radios.forEach((radio) => {
  radio.onclick = () => onClickFilter(radio.value);
});
