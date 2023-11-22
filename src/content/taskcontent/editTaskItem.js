import { validateDate, taskItem as newTaskItem } from "../..";
import saveSvg from "/src/icons/content-save.svg";
import editSvg from "/src/icons/pencil.svg";
import addTaskItem, { formatDate } from "./addTaskItem";
import { isToday } from "date-fns";
import { updateTaskQty } from "./updateTaskQty";
import { updatePriority } from "./updatePriority";

export default function editTaskItem(
  event,
  taskItem,
  taskTitle,
  editIcon,
  datepickerInput,
  newPriority,
  dueDate
) {
  document.querySelectorAll(".editable-item").forEach((item) => {
    if (event.target.closest(".task-item").contains(item)) {
      item.contentEditable = true;
    }
  });

  const eventContent = event.target
    .closest(".content-container")
    .querySelector("h1").textContent;

  taskItem.classList.toggle("selected");
  if (taskItem.classList.contains("selected")) {
    taskTitle.focus();
    editIcon.src = saveSvg;
    editIcon.setAttribute("title", "Save changes");

    if (eventContent !== "today") datepickerInput.disabled = false;
    newPriority.disabled = false;
  }
  if (!taskItem.classList.contains("selected")) {
    editIcon.src = editSvg;
    editIcon.setAttribute("title", "Edit task");
    document.querySelectorAll(".editable-item").forEach((item) => {
      item.contentEditable = false;
    });
    datepickerInput.disabled = true;
    newPriority.disabled = true;

    const currentTasks = JSON.parse(localStorage.getItem("tasks"));
    const currentItem = event.target.closest(".task-item");

    const currentTitle =
      currentItem.querySelector(".task-item--title").textContent;
    const currentDescription = currentItem.querySelector(
      ".task-item--description"
    ).textContent;
    const currentPriority = currentItem.querySelector(".new-priority").value;
    const currentDateText = currentItem.querySelector(".datetext-input").value;
    const counter = +currentItem.classList[1].slice(11);

    let currentDate;
    if (!currentItem.querySelector(".datepicker-input").value)
      currentDate = dueDate;
    else currentDate = currentItem.querySelector(".datepicker-input").value;

    currentTasks.forEach((task) => {
      if (task.counter === counter) {
        task.title = currentTitle;
        task.description = currentDescription;
        task.priority = currentPriority;
        task.dueDate = currentDate;
      }
    });
    localStorage.setItem("tasks", JSON.stringify(currentTasks));

    document.querySelectorAll(".task-item").forEach((item) => {
      const currentItemQty = document.querySelectorAll(
        `.task-item--${counter}`
      );

      if (item === currentItem && currentItemQty.length === 1) {
        if (currentDateText && currentDate && isToday(new Date(currentDate))) {
          const todayItem = new newTaskItem(
            currentTitle,
            currentDescription,
            currentDate,
            currentPriority,
            "today",
            counter
          );
          addTaskItem(
            todayItem,
            document.querySelector(".content-today"),
            counter
          );
          currentTasks.push(todayItem);
          localStorage.setItem("tasks", JSON.stringify(currentTasks));
        }
        return;
      }

      if (
        item.classList.contains(currentItem.classList[1]) &&
        item !== currentItem
      ) {
        if (
          currentItem.querySelector(".datepicker-input").value &&
          !isToday(
            new Date(currentItem.querySelector(".datepicker-input").value)
          )
        ) {
          updateTaskQty(
            item.closest(".content-container").querySelector("h1").textContent,
            1
          );

          function removeElement(array, elementToRemove) {
            const index = array.indexOf(elementToRemove);
            if (index !== -1) {
              array.splice(index, 1);
            }
          }

          currentTasks.forEach((task) => {
            if (task.project === "today" && task.counter === counter)
              removeElement(currentTasks, task);
          });

          localStorage.setItem("tasks", JSON.stringify(currentTasks));
          item.remove();
        }

        item.querySelector(".task-item--title").textContent = currentTitle;
        item.querySelector(".task-item--description").textContent =
          currentDescription;
        item.querySelector(".new-priority").value = currentPriority;
        updatePriority(
          item.querySelector(".new-priority").value,
          item.querySelector(".task-title-before")
        );
      }
    });
  }
}

export function editDate(datepickerInput, datetextInput) {
  if (!datepickerInput) {
    datetextInput.value = "No date";
    return;
  }
  if (isToday(new Date(datepickerInput))) datetextInput.value = "Today";
  else {
    validateDate(datepickerInput)
      ? (datetextInput.value = formatDate.format(new Date(datepickerInput)))
      : (datetextInput.value = "No date");
  }
}
