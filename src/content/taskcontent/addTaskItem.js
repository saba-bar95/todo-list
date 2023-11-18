import commentSvg from "/src/icons/comment.svg";
import editSvg from "/src/icons/pencil.svg";
import deleteSvg from "/src/icons/delete.svg";
import editTaskItem, { editDate } from "./editTaskItem";
import { updateTaskQty } from "./updateTaskQty";
import isToday from "date-fns/isToday";
import { updatePriority } from "./updatePriority";

let formatDate;
let option;

export default function addTaskItem(item, contentItem, counter) {
  const taskItem = document.createElement("li");
  taskItem.classList.add("task-item", `task-item--${counter}`);
  taskItem.setAttribute("spellcheck", false);

  const taskItemContainer = document.querySelectorAll(".task-items-container");

  taskItemContainer.forEach((item) => {
    if (contentItem.contains(item)) item.appendChild(taskItem);
  });

  const rightSide = document.createElement("div");
  rightSide.classList.add("task-item--rightside");
  taskItem.appendChild(rightSide);

  const titleContainer = document.createElement("div");
  titleContainer.classList.add("title-container");
  rightSide.appendChild(titleContainer);

  const taskTitle = document.createElement("h1");
  taskTitle.classList.add("task-item--title", "editable-item");
  taskTitle.textContent = item.title;
  titleContainer.appendChild(taskTitle);

  const taskTitleBefore = document.createElement("span");
  taskTitleBefore.classList.add("task-title-before");
  updatePriority(item.priority, taskTitleBefore);
  titleContainer.insertBefore(taskTitleBefore, taskTitle);

  const taskDescriptionContainter = document.createElement("div");
  taskDescriptionContainter.classList.add("task-description-container");
  rightSide.appendChild(taskDescriptionContainter);

  const commentIcon = new Image();
  commentIcon.src = commentSvg;
  commentIcon.classList.add("task-icon", "comment-icon");
  taskDescriptionContainter.appendChild(commentIcon);

  const taskDescription = document.createElement("p");
  taskDescription.classList.add("task-item--description", "editable-item");
  taskDescription.textContent = item.description;
  taskDescriptionContainter.appendChild(taskDescription);

  const dateContainer = document.createElement("div");
  dateContainer.classList.add("date-container", "hidden");
  rightSide.appendChild(dateContainer);

  const datepickerToggle = document.createElement("span");
  datepickerToggle.classList.add("datepicker-toggle");
  dateContainer.appendChild(datepickerToggle);

  const datepickerToggleBtn = document.createElement("span");
  datepickerToggleBtn.classList.add("datepicker-toggle-button");
  dateContainer.appendChild(datepickerToggleBtn);

  const datepickerInput = document.createElement("input");
  datepickerInput.classList.add("datepicker-input");
  datepickerInput.setAttribute("type", "date");
  dateContainer.appendChild(datepickerInput);
  datepickerInput.disabled = true;

  formatDate = new Intl.DateTimeFormat("en-us", { dateStyle: "long" });
  const datetextInput = document.createElement("input");
  datetextInput.classList.add("datetext-input");
  datetextInput.setAttribute("type", "text");

  if (isToday(new Date(item.dueDate)))
    datetextInput.setAttribute("value", "Today");
  else
    datetextInput.setAttribute(
      "value",
      item.dueDate ? `${formatDate.format(new Date(item.dueDate))}` : "No date"
    );
  dateContainer.appendChild(datetextInput);

  const newPriority = document.createElement("select");
  newPriority.classList.add("new-priority", "hidden");
  rightSide.appendChild(newPriority);
  newPriority.disabled = true;

  for (let i = 1; i < 5; i++) {
    option = document.createElement("option");
    option.classList.add("select-option", `option-${i}`);
    option.setAttribute("value", i);
    option.textContent = `Priority ${i}`;
    newPriority.appendChild(option);
  }

  newPriority
    .querySelector(`.option-${item.priority}`)
    .setAttribute("selected", "");

  const leftSide = document.createElement("div");
  leftSide.classList.add("task-item--leftside");
  taskItem.appendChild(leftSide);

  const editIcon = new Image();
  editIcon.classList.add("task-icon", "edit-icon", "hidden");
  editIcon.src = editSvg;
  editIcon.setAttribute("title", "Edit task");
  leftSide.appendChild(editIcon);

  const deleteIcon = new Image();
  deleteIcon.classList.add("task-icon", "delete-icon", "hidden");
  deleteIcon.src = deleteSvg;
  leftSide.appendChild(deleteIcon);

  updateTaskQty(item.project);

  function classToggle() {
    dateContainer.classList.toggle("hidden");
    newPriority.classList.toggle("hidden");
    editIcon.classList.toggle("hidden");
    deleteIcon.classList.toggle("hidden");
  }

  taskItem.addEventListener("mouseenter", function () {
    if (!taskItem.classList.contains("selected")) {
      classToggle();
      taskItem.style.cursor = "pointer";
    }
  });

  taskItem.addEventListener("mouseleave", function () {
    if (!taskItem.classList.contains("selected")) {
      classToggle();
    }
  });

  deleteIcon.addEventListener("click", function (e) {
    updateTaskQty(e.target);
    const currentTask = e.target.closest(".task-item");
    currentTask.remove();
    const currentTaskNumber = +currentTask.classList[1].slice(11);
    const currentTasks = JSON.parse(localStorage.getItem("tasks"));

    const filteredTask = currentTasks.filter((task) => {
      return +task.counter !== currentTaskNumber;
    });

    localStorage.setItem("tasks", JSON.stringify(filteredTask));

    document.querySelectorAll(".task-item").forEach((item) => {
      if (
        item.classList.contains(e.target.closest(".task-item").classList[1])
      ) {
        const todayTask = item;
        updateTaskQty(todayTask.querySelector(".delete-icon"));
        todayTask.remove();
      }
    });
  });

  editIcon.addEventListener("click", function (e) {
    editTaskItem(
      e,
      taskItem,
      taskTitle,
      editIcon,
      datepickerInput,
      newPriority
    );
  });

  datepickerInput.addEventListener("change", function () {
    editDate(datepickerInput.value, datetextInput);
  });

  newPriority.addEventListener("change", function () {
    updatePriority(newPriority.value, taskTitleBefore);
  });
}

export { formatDate };
