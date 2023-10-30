import commnetSvg from "/src/icons/comment.svg";
import editSvg from "/src/icons/pencil.svg";
import deleteSvg from "/src/icons/delete.svg";
import editTaskItem, { editDate } from "./editTaskItem";
import { taskPriority } from "./taskContent";
import { formatDistance, subDays } from "date-fns";

let taskItemArray = [];

export default function addTaskItem(item, contentItem) {
  const taskItem = document.createElement("li");
  taskItem.classList.add("task-item");
  taskItem.setAttribute("spellcheck", false);
  taskItemArray.push(taskItem);

  const taskItemContainer = document.querySelectorAll(".task-items-container");

  taskItemContainer.forEach((item) => {
    if (
      taskItemArray.length > 1 &&
      item.contains(taskItemArray[taskItemArray.length - 2]) &&
      contentItem.contains(item)
    ) {
      item.insertBefore(
        taskItemArray[taskItemArray.length - 1],
        taskItemArray[taskItemArray.length - 2]
      );
      return;
    }

    if (contentItem.contains(item))
      item.appendChild(taskItemArray[taskItemArray.length - 1]);
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
  updatePriority(item.priority);
  titleContainer.insertBefore(taskTitleBefore, taskTitle);

  const taskDescriptionContainter = document.createElement("div");
  taskDescriptionContainter.classList.add("task-description-container");
  rightSide.appendChild(taskDescriptionContainter);

  const commentIcon = new Image();
  commentIcon.src = commnetSvg;
  commentIcon.classList.add("task-icon", "comment-icon");
  taskDescriptionContainter.appendChild(commentIcon);

  const taskDescription = document.createElement("p");
  taskDescription.classList.add("task-item--description", "editable-item");
  taskDescription.textContent = item.description;
  taskDescriptionContainter.appendChild(taskDescription);

  const dateContainer = document.createElement("div");
  dateContainer.classList.add("date-container");
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

  console.log(item.dueDate);
  console.log(
    formatDistance(subDays(new Date(), 3), new Date(), { addSuffix: true })
  );

  const datetextInput = document.createElement("input");
  datetextInput.classList.add("datetext-input");
  datetextInput.setAttribute("type", "text");
  datetextInput.setAttribute(
    "value",
    item.dueDate ? `${item.dueDate}` : "No date"
  );
  dateContainer.appendChild(datetextInput);

  const newPriority = taskPriority.cloneNode(true);
  newPriority.classList.add("new-priority", "hidden");
  rightSide.appendChild(newPriority);
  newPriority.disabled = true;

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

  function updatePriority(priority) {
    if (+priority === 4) taskTitleBefore.style.backgroundColor = "black";
    if (+priority === 3) taskTitleBefore.style.backgroundColor = "blue";
    if (+priority === 2) taskTitleBefore.style.backgroundColor = "orange";
    if (+priority === 1) taskTitleBefore.style.backgroundColor = "red";
  }

  function classToggle() {
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
    e.target.closest(".task-item").remove();
    taskItemArray = taskItemArray.filter(
      (el) => el !== e.target.closest(".task-item")
    );
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
    editDate(datepickerInput, datetextInput);
  });

  newPriority.addEventListener("change", function () {
    updatePriority(newPriority.value);
  });
}
