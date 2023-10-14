import "./newProject.css";
import { body } from "../..";
import { createProjectItem } from "../sidebar";
import { projectItems } from "../sidebar";
import { createContentProjectItem } from "../../content/createContent";

export default function newProject() {
  body.style.overflow = "hidden";
  const newProjectDiv = document.createElement("div");
  newProjectDiv.setAttribute("id", "new-project");

  const newProjectContainer = document.createElement("div");
  newProjectContainer.classList.add("new-project-container");
  newProjectDiv.appendChild(newProjectContainer);

  const newProjectHeader = document.createElement("h1");
  newProjectHeader.classList.add("new-project-header");
  newProjectHeader.textContent = "Add new project";
  newProjectContainer.appendChild(newProjectHeader);

  const newProjectLabel = document.createElement("label");
  newProjectLabel.textContent = "name";
  newProjectLabel.setAttribute("for", "project-name");
  newProjectContainer.appendChild(newProjectLabel);

  const labelSpan = document.createElement("span");
  labelSpan.textContent = "*";
  newProjectLabel.appendChild(labelSpan);

  const newProjectName = document.createElement("input");
  newProjectName.setAttribute("type", "text");
  newProjectName.setAttribute("id", "project-name");
  newProjectName.setAttribute("autocomplete", "off");
  newProjectName.setAttribute("required", "");
  newProjectContainer.appendChild(newProjectName);

  const addNewProjectBtn = document.createElement("button");
  addNewProjectBtn.textContent = "Add project";
  addNewProjectBtn.classList.add("newproject-btn");
  newProjectContainer.appendChild(addNewProjectBtn);

  function checkElement(element, array) {
    return array.some(function (item) {
      return item.toLowerCase() === element.toLowerCase();
    });
  }

  addNewProjectBtn.addEventListener("click", function () {
    if (checkElement(newProjectName.value, projectItems)) {
      alert("This project already exist");
      newProjectName.value = "";
      return;
    }

    if (newProjectName.validity.valid) {
      createProjectItem(newProjectName.value);
      projectItems.push(newProjectName.value);
      newProjectDiv.remove();
      document.querySelector(
        ".projects-qty"
      ).textContent = `${projectItems.length} projets `;

      createContentProjectItem(
        newProjectName.value,
        document.querySelector(".content-projects-container")
      );
    }

    if (!newProjectName.validity.valid) alert("Enter project name, please");
  });

  newProjectDiv.addEventListener("click", function (e) {
    if (!e.target.closest(".new-project-container")) newProjectDiv.remove();
  });

  body.appendChild(newProjectDiv);
}
