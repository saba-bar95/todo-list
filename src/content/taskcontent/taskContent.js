import { body, validateDate, taskItem } from "../..";
import "./taskContent.css";
import createSelectOption from "./createSelectOption";
import addTaskItem from "./addTaskItem";
import { isToday } from "date-fns";

let taskPriority;
let counter;

if (
  JSON.parse(localStorage.getItem("tasks")) &&
  JSON.parse(localStorage.getItem("tasks")).length > 0
) {
  counter = JSON.parse(localStorage.getItem("counter"));
} else counter = 0;

export function taskContent() {
  const taskContent = document.createElement("div");
  taskContent.setAttribute("id", "task-content");
  body.appendChild(taskContent);

  const taskContainer = document.createElement("div");
  taskContainer.classList.add("task-container");
  taskContent.appendChild(taskContainer);

  const taskForm = document.createElement("form");
  taskForm.setAttribute("id", "task-form");
  taskForm.classList.add("task-form");
  taskContainer.appendChild(taskForm);

  const taskName = document.createElement("input");
  taskName.classList.add("task-name");
  taskName.setAttribute("placeholder", "Task name");
  taskName.setAttribute("required", "");
  taskForm.appendChild(taskName);

  const taskDescription = document.createElement("input");
  taskDescription.classList.add("task-description");
  taskDescription.setAttribute("placeholder", "Description");
  taskForm.appendChild(taskDescription);

  const wrapperDiv = document.createElement("div");
  wrapperDiv.classList.add("wrapper-div");
  taskForm.appendChild(wrapperDiv);

  const dateString = new Date().toISOString().slice(0, 10);

  const taskDate = document.createElement("input");
  taskDate.setAttribute("type", "date");
  taskDate.classList.add("task-date");
  taskDate.value = dateString;
  wrapperDiv.appendChild(taskDate);

  taskPriority = document.createElement("select");
  taskPriority.classList.add("priority-select");
  wrapperDiv.appendChild(taskPriority);

  for (let i = 1; i < 5; i++) {
    const option = document.createElement("option");
    option.classList.add("select-option", `option-${i}`);
    option.setAttribute("value", i);
    option.textContent = `Priority ${i}`;
    taskPriority.appendChild(option);
    if (i == 4) option.setAttribute("selected", "");
  }

  const lastDiv = document.createElement("div");
  lastDiv.classList.add("last-div");
  taskForm.appendChild(lastDiv);

  const selectProject = document.createElement("select");
  selectProject.classList.add("select-project");
  lastDiv.appendChild(selectProject);

  const navItems = document.querySelectorAll(".nav-item");

  navItems.forEach((item) => {
    createSelectOption(item.querySelector("p").textContent, selectProject);
  });

  const btnContainer = document.createElement("div");
  btnContainer.classList.add("btn-container");
  lastDiv.appendChild(btnContainer);

  const cancelBtn = document.createElement("button");
  cancelBtn.textContent = "cancel";
  cancelBtn.classList.add("form-btn", "cancel-btn");
  btnContainer.appendChild(cancelBtn);

  const addBtn = document.createElement("button");
  addBtn.textContent = "add task";
  addBtn.setAttribute("type", "submit");
  addBtn.classList.add("form-btn", "add-btn");
  btnContainer.appendChild(addBtn);

  document.querySelectorAll(".form-btn").forEach((el) => {
    el.addEventListener("click", function (e) {
      e.preventDefault();
    });
  });

  cancelBtn.addEventListener("click", function () {
    taskContent.remove();
  });

  taskForm.addEventListener("input", function () {
    if (taskForm.checkValidity()) {
      addBtn.style.backgroundColor = "#d33a2c";
      addBtn.style.boxShadow = "rgba(0, 0, 0, 0.12) 0 1px 3px 0 inset";
      addBtn.style.color = "#ffffff";
    }
    if (!taskForm.checkValidity()) {
      addBtn.style.backgroundColor = "#ffe7e7";
      addBtn.style.color = "#dc2626";
      addBtn.style.boxShadow = "none";
    }
  });

  addBtn.addEventListener("click", function () {
    if (taskForm.checkValidity() && validateDate(taskDate.value)) {
      counter++;
      localStorage.setItem("counter", JSON.stringify(counter));

      taskContent.remove();
      const contentItems = document.querySelectorAll(".content-container");
      contentItems.forEach((el) => {
        if (el.classList.contains(`content-${selectProject.value}`)) {
          const newTaskItem = new taskItem(
            taskName.value,
            taskDescription.value,
            taskDate.value,
            taskPriority.value,
            selectProject.value,
            counter
          );

          addTaskItem(newTaskItem, el, counter);
          const currentTasks = JSON.parse(localStorage.getItem("tasks"));
          currentTasks.push(newTaskItem);
          localStorage.setItem("tasks", JSON.stringify(currentTasks));

          if (isToday(new Date(taskDate.value))) {
            newTaskItem.project = "today";
            addTaskItem(
              newTaskItem,
              document.querySelector(".content-today"),
              counter
            );
            const currentTasks = JSON.parse(localStorage.getItem("tasks"));
            currentTasks.push(newTaskItem);
            localStorage.setItem("tasks", JSON.stringify(currentTasks));
          }
        }
      });
    }
  });

  taskContent.addEventListener("click", function (e) {
    if (!e.target.closest(".task-container")) taskContent.remove();
  });
}
