import saveSvg from "/src/icons/content-save.svg";
import editSvg from "/src/icons/pencil.svg";
import { validateDate } from "./taskContent";

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

  taskItem.classList.toggle("selected");
  if (taskItem.classList.contains("selected")) {
    taskTitle.focus();
    editIcon.src = saveSvg;
    editIcon.setAttribute("title", "Save changes");
    datepickerInput.disabled = false;
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
  }
}

export function editDate(datepickerInput, datetextInput) {
  if (!datepickerInput.value) {
    datetextInput.value = "No date";
    return;
  }
  validateDate(datepickerInput.value)
    ? (datetextInput.value = datepickerInput.value)
    : (datetextInput.value = "No date");
}
