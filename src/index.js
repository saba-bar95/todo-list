import "./index.css";
import { header } from "./header/header";
import { sidebar } from "./sidebar/sidebar";
import { content } from "./content/content";
import addTaskItem from "./content/taskcontent/addTaskItem";

const body = document.querySelector("body");

body.appendChild(header());
body.appendChild(sidebar());
body.appendChild(content());

const taskArr = [];
const currentTasks = JSON.parse(localStorage.getItem("tasks"));

const validateDate = function (taskDate) {
  const dateString = new Date().toISOString().slice(0, 10);
  if (!taskDate) return true;
  if (taskDate < dateString) {
    alert("You cannot enter an old date. Please enter a valid date.");
    return false;
  } else return true;
};

const taskItem = function (
  title,
  description,
  dueDate,
  priority,
  project,
  counter
) {
  this.title = title;
  this.description = description;
  this.dueDate = dueDate;
  this.priority = priority;
  this.project = project;
  this.counter = counter;
};

if (currentTasks && currentTasks.length > 0) {
  currentTasks.forEach((task) => {
    addTaskItem(
      task,
      document.querySelector(`.content-${task.project}`),
      task.counter
    );
  });
} else localStorage.setItem("tasks", JSON.stringify(taskArr));

export { body, validateDate, taskItem };
