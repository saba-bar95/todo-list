let projectGroup;
let itemText;
let selectItems;

export default function createSelectOption(item, selectProject) {
  if (item.tagName === "P" || item.tagName === "IMG") {
    itemText = item.parentElement.previousSibling.textContent;
    selectItems = document.querySelectorAll(".select-item");
    selectItems.forEach((el) => {
      el.removeAttribute("selected");
    });
    selectItems.forEach((el) => {
      if (el.classList.contains(`select-item-${itemText}`))
        el.setAttribute("selected", "");
    });
    return;
  }

  if (item.tagName === "DIV") {
    itemText = item.previousSibling.textContent;
    selectItems = document.querySelectorAll(".select-item");
    selectItems.forEach((el) => {
      el.removeAttribute("selected");
    });

    selectItems.forEach((el) => {
      if (el.classList.contains(`select-item-${itemText}`))
        el.setAttribute("selected", "");
    });
    return;
  }

  itemText = item;
  if (itemText === "projects") {
    projectGroup = document.createElement("optgroup");
    projectGroup.label = "Projects";
    selectProject.appendChild(projectGroup);
    return;
  }
  const selectItem = document.createElement("option");
  selectItem.classList.add("select-item", `select-item-${itemText}`);
  selectItem.textContent = itemText;
  selectItem.value = itemText;

  if (itemText === "today") return;

  if (itemText === "inbox") selectProject.appendChild(selectItem);
  else projectGroup.appendChild(selectItem);
}
