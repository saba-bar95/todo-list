import "./newProject.css";
import { body } from "../..";

export default function newProject() {
  body.style.overflow = "hidden";
  const newProjectDiv = document.createElement("div");
  newProjectDiv.setAttribute("id", "new-project");

  const newProjectContainer = document.createElement("div");
  newProjectContainer.classList.add("new-project-container");
  newProjectDiv.appendChild(newProjectContainer);

  newProjectDiv.addEventListener("click", function (e) {
    if (!e.target.classList.contains("new-project-container"))
      newProjectDiv.remove();
  });

  body.appendChild(newProjectDiv);
}
