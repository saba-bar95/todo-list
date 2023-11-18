import "./deleteProject.css";
import { body } from "../..";
import { createContent } from "../../content/createContent";
import deleteContent from "../../content/deleteContent";
import { updateTaskQty } from "../../content/taskcontent/updateTaskQty";

export default function deleteProject(deleteIcon) {
  body.style.overflow = "hidden";

  const deleteProject = document.createElement("div");
  deleteProject.setAttribute("id", "delete-project");
  body.appendChild(deleteProject);

  const deleteProjectContainer = document.createElement("div");
  deleteProjectContainer.classList.add("delete-project-container");
  deleteProject.appendChild(deleteProjectContainer);

  const deleteProjectHeader = document.createElement("h1");
  deleteProjectHeader.classList.add("delete-project-header");
  deleteProjectHeader.textContent = "Do you want to delete the project?";
  deleteProjectContainer.appendChild(deleteProjectHeader);

  const btnsContainer = document.createElement("div");
  btnsContainer.classList.add("btns-container");
  deleteProjectContainer.appendChild(btnsContainer);

  const yesBtn = document.createElement("button");
  yesBtn.classList.add("delete-btn", "yes-btn");
  yesBtn.textContent = "yes";
  btnsContainer.appendChild(yesBtn);

  const noBtn = document.createElement("button");
  noBtn.classList.add("delete-btn", "no-btn");
  noBtn.textContent = "no";
  btnsContainer.appendChild(noBtn);

  const projectItems = JSON.parse(localStorage.getItem("projectItems"));

  function removeElement(array, elementToRemove) {
    const index = array.indexOf(elementToRemove);
    if (index !== -1) {
      array.splice(index, 1);
    }
  }

  yesBtn.addEventListener("click", function () {
    const projectName = deleteIcon.previousSibling.previousSibling.textContent;
    document.querySelectorAll(".content-container").forEach((el) => {
      if (el.classList.contains(`content-${projectName}`)) {
        const childrenItems = el.querySelector(
          ".task-items-container"
        ).children;

        Array.from(childrenItems).forEach((el) => {
          document.querySelectorAll(".task-item").forEach((el2) => {
            if (el2.classList.contains(el.classList[1])) {
              updateTaskQty(el2.querySelector(".delete-icon"));
              el2.remove();
            }
          });
        });
      }
    });

    body.style.overflow = "auto";
    deleteIcon.parentElement.remove();
    deleteProject.remove();
    createContent(document.querySelector(".nav-item-inbox"));
    deleteContent(deleteIcon.parentElement);

    if (projectItems.includes(projectName)) {
      removeElement(projectItems, projectName);
    }

    document.querySelectorAll(".content-project-item").forEach((el) => {
      if (el.classList.contains(`project-item-${projectName}`)) el.remove();
    });

    document.querySelector(`.content-${projectName}`).remove();

    const storageProjectItems = JSON.parse(
      localStorage.getItem("projectItems")
    );

    const indexToRemove = storageProjectItems.indexOf(projectName);

    if (indexToRemove > -1) {
      storageProjectItems.splice(indexToRemove, 1);
    }

    localStorage.setItem("projectItems", JSON.stringify(storageProjectItems));

    const currentTasks = JSON.parse(localStorage.getItem("tasks"));
    const taskNumbers = new Set([]);

    const filteredProjectTasks = currentTasks.filter((el) => {
      if (el.project === projectName) taskNumbers.add(el.counter);
      return el.project !== projectName;
    });

    const filteredTodayTasks = filteredProjectTasks.filter((element) => {
      if (!taskNumbers.has(element.counter)) return element;
    });

    localStorage.setItem("tasks", JSON.stringify(filteredTodayTasks));
  });

  noBtn.addEventListener("click", function () {
    deleteProject.remove();
    body.style.overflow = "auto";
  });

  deleteProject.addEventListener("click", function (e) {
    if (!e.target.closest(".delete-project-container")) deleteProject.remove();
  });
}
