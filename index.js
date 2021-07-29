const menuButton = document.querySelector(".menuButton");
menuButton.onclick = sendAlert;

function sendAlert() {
  alert("Hello World");
}
const tasklist = document.querySelector(".taskList");

const tasks = [ {
  title: "Schön erst einmal mit dem Hund spazieren gehen",
  date: "Tomorrow",
  isDone: false,
},
{
  title: "Schön erst einmal mit dem Hund spazieren gehen",
  date: "Tomorrow",
  isDone: false,
},
{
  title: "Schön erst einmal mit dem Hund spazieren gehen",
  date: "Tomorrow",
  isDone: false,
},
];


]
// const taskOne = createTaskListItem("Kaffee kochen");
// const taskTwo = createTaskListItem("Hund ausführen");
const taskFromObject = createTaskListItem(potentialTask);

tasklist.append();

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
