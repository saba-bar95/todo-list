import "./deleteProject.css";
import { body } from "../..";
import { createContent } from "../../content/createContent";
import deleteContent from "../../content/deleteContent";
import { projectItems } from "../sidebar";

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

  function removeElement(array, elementToRemove) {
    const index = array.indexOf(elementToRemove);
    if (index !== -1) {
      array.splice(index, 1);
    }
  }

  yesBtn.addEventListener("click", function () {
    deleteIcon.parentElement.remove();
    deleteProject.remove();
    createContent(document.querySelector(".nav-item-inbox"));
    deleteContent(deleteIcon.parentElement);
    if (projectItems.includes(deleteIcon.parentElement.textContent))
      removeElement(projectItems, deleteIcon.parentElement.textContent);

    const contentProjectItems = document.querySelectorAll(
      ".content-project-item"
    );

    contentProjectItems.forEach((el) => {
      if (
        el.classList.contains(
          `project-item-${deleteIcon.parentElement.textContent}`
        )
      )
        el.remove();
    });
  });

  noBtn.addEventListener("click", function () {
    deleteProject.remove();
  });

  deleteProject.addEventListener("click", function (e) {
    if (!e.target.closest(".delete-project-container")) deleteProject.remove();
  });
}
