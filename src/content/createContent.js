import { navItemDivs } from "../sidebar/sidebar";
import { contents, contentDiv } from "./content";
import { projectItems } from "../sidebar/sidebar";
import plusSvg from "/src/icons/plus-box.svg";

const createContentProjectItem = function (item, projectsContainer) {
  const projectItem = document.createElement("li");
  projectItem.classList.add("content-project-item", `project-item-${item}`);
  projectItem.textContent = item;
  projectsContainer.appendChild(projectItem);

  projectItem.addEventListener("click", function () {
    document.querySelectorAll(".project-item").forEach((el) => {
      if (el.classList.contains(`project-item-${projectItem.textContent}`))
        createContent(el);
    });
  });
};

export function createContent(item) {
  let projecstsQty;
  if (item.classList.contains("sidebar-icon")) return;

  if (item.closest(".nav-item")) {
    navItemDivs.forEach((el) => {
      el.classList.remove("selected");
    });

    contents.forEach((el) => {
      if (el.classList.contains(`content-${item.textContent}`))
        el.classList.remove("hidden");
      else el.classList.add("hidden");
    });

    if (item.classList.contains("nav-item-projects")) {
      if (document.querySelector(".projects-qty")) {
        document.querySelector(
          ".projects-qty"
        ).textContent = `${projectItems.length} projects`;
      }
    }

    item.closest(".nav-item").classList.add("selected");
    if (item.closest(".nav-item").classList.contains("created")) return;
    item.closest(".nav-item").classList.add("created");

    const contentContainer = document.createElement("div");
    contentContainer.classList.add(
      "content-container",
      `content-${item.textContent}`
    );
    contentDiv.appendChild(contentContainer);
    contents.push(contentContainer);

    const contentHeader = document.createElement("h1");
    contentHeader.classList.add("content-header");
    contentHeader.textContent = item.textContent;
    contentContainer.appendChild(contentHeader);

    if (item.classList.contains("nav-item-projects")) {
      projecstsQty = document.createElement("div");
      projecstsQty.textContent = `${projectItems.length} projects `;
      projecstsQty.classList.add("projects-qty");
      contentContainer.appendChild(projecstsQty);

      const projectsContainer = document.createElement("ul");
      projectsContainer.classList.add("content-projects-container");
      contentContainer.appendChild(projectsContainer);

      projectItems.forEach((item) => {
        createContentProjectItem(item, projectsContainer);
      });

      return;
    }

    const addTaskDiv = document.createElement("div");
    addTaskDiv.classList.add("add-task-div");
    contentContainer.appendChild(addTaskDiv);

    const plusIcon = new Image();
    plusIcon.src = plusSvg;
    plusIcon.classList.add("content-icon", "plus-icon");
    addTaskDiv.appendChild(plusIcon);

    const addTaskText = document.createElement("p");
    addTaskText.classList.add("add-task-text");
    addTaskText.textContent = "Add task";
    addTaskDiv.appendChild(addTaskText);
  }
}

export { createContentProjectItem };
