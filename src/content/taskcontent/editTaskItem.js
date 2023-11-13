import saveSvg from "/src/icons/content-save.svg";
import editSvg from "/src/icons/pencil.svg";
import { validateDate, taskItem as newTaskItem } from "./taskContent";
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
  newPriority
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

    const currentItem = event.target.closest(".task-item");
    const currentTitle =
      currentItem.querySelector(".task-item--title").textContent;
    const currentDescription = currentItem.querySelector(
      ".task-item--description"
    ).textContent;
    const currentPriority = currentItem.querySelector(".priority-select").value;
    const currentDate = currentItem.querySelector(".datepicker-input").value;
    const currentDateText = currentItem.querySelector(".datetext-input").value;

    document.querySelectorAll(".task-item").forEach((item) => {
      const currentItemQty = document.querySelectorAll(
        `.task-item-${currentItem.classList[1].slice(-1)}`
      );

      if (item === currentItem && currentItemQty.length === 1) {
        if (currentDateText && currentDate && isToday(new Date(currentDate))) {
          const todayItem = new newTaskItem(
            currentTitle,
            currentDescription,
            currentDate,
            currentPriority,
            "today"
          );
          const counter = currentItem.classList[1].slice(-1) - 1;
          addTaskItem(
            todayItem,
            document.querySelector(".content-today"),
            counter
          );
        }
        return;
      }

      if (item.classList.contains(currentItem.classList[1])) {
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
          item.remove();
        }

        item.querySelector(".task-item--title").textContent = currentTitle;
        item.querySelector(".task-item--description").textContent =
          currentDescription;
        item.querySelector(".priority-select").value = currentPriority;
        updatePriority(
          item.querySelector(".priority-select").value,
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
  else
    validateDate(datepickerInput)
      ? (datetextInput.value = formatDate.format(new Date(datepickerInput)))
      : (datetextInput.value = "No date");
}
