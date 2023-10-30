let projectGroup;

export default function createSelectOption(item, selectProject) {
  if (item.tagName === "H1") {
    const selectItems = document.querySelectorAll(".select-item");
    selectItems.forEach((el) => {
      el.removeAttribute("selected");
    });

    selectItems.forEach((el) => {
      if (el.classList.contains(`select-item-${item.textContent}`))
        el.setAttribute("selected", "");
    });

    return;
  }
  if (item.textContent === "today") return;
  if (item.textContent === "projects") {
    projectGroup = document.createElement("optgroup");
    projectGroup.label = "Projects";
    selectProject.appendChild(projectGroup);
    return;
  }

  const selectItem = document.createElement("option");
  selectItem.classList.add("select-item", `select-item-${item.textContent}`);
  selectItem.textContent = item.textContent;
  selectItem.value = item.textContent;

  if (item.textContent === "inbox") selectProject.appendChild(selectItem);
  else projectGroup.appendChild(selectItem);
}
