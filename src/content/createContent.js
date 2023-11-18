import { navItemDivs, projectItems, projectItemsArr } from "../sidebar/sidebar";
import { contents, contentDiv } from "./content";
import { taskContent } from "./taskcontent/taskContent";
import createSelectOption from "./taskcontent/createSelectOption";
import plusSvg from "/src/icons/plus-box.svg";

const createContentProjectItem = function (item, projectsContainer) {
  const projectItem = document.createElement("li");
  projectItem.classList.add("content-project-item", `project-item-${item}`);
  projectItem.textContent = item;
  projectsContainer.appendChild(projectItem);

  createContent(document.querySelector(`.project-item-${item}`));
  projectItem.addEventListener("click", function () {
    document.querySelectorAll(".project-item").forEach((el) => {
      if (el.classList.contains(`project-item-${projectItem.textContent}`))
        createContent(el);
    });
  });
};

export function createContent(item) {
  if (item.closest(".nav-item")) {
    navItemDivs.forEach((el) => {
      el.classList.remove("selected");
      document.querySelector(".nav-item-projects").classList.remove("selected");
    });

    contents.forEach((el) => {
      if (
        el.classList.contains(`content-${item.querySelector("p").textContent}`)
      )
        el.classList.remove("hidden");
      else el.classList.add("hidden");
    });

    if (item.classList.contains("nav-item-projects")) {
      let projects;
      if (document.querySelector(".content-projects-container")) {
        projects = document.querySelector(
          ".content-projects-container"
        ).childElementCount;
      }
      if (document.querySelector(".projects-qty")) {
        document.querySelector(
          ".projects-qty"
        ).textContent = `${projects} projects`;
      }
    }

    item.closest(".nav-item").classList.add("selected");
    if (item.closest(".nav-item").classList.contains("created")) return;
    item.closest(".nav-item").classList.add("created");

    const contentContainer = document.createElement("div");
    contentContainer.classList.add(
      "content-container",
      `content-${item.querySelector("p").textContent}`
    );
    contentDiv.appendChild(contentContainer);
    contents.push(contentContainer);

    const contentHeader = document.createElement("h1");
    contentHeader.classList.add("content-header");
    contentHeader.textContent = item.querySelector("p").textContent;
    contentContainer.appendChild(contentHeader);

    let projecstsQty;
    if (item.classList.contains("nav-item-projects")) {
      projecstsQty = document.createElement("div");
      projecstsQty.textContent = `${projectItems.length} projects `;
      projecstsQty.classList.add("projects-qty");
      contentContainer.appendChild(projecstsQty);

      const projectsContainer = document.createElement("ul");
      projectsContainer.classList.add("content-projects-container");
      contentContainer.appendChild(projectsContainer);

      projectItemsArr.forEach((item) => {
        createContentProjectItem(
          item.querySelector("p").textContent,
          projectsContainer
        );
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

    const taskItemsContainer = document.createElement("ul");
    taskItemsContainer.classList.add("task-items-container");
    contentContainer.appendChild(taskItemsContainer);

    const selectOption = document.querySelector(".select-project");

    addTaskDiv.addEventListener("click", function (e) {
      taskContent();

      if (e.target.tagName === "DIV")
        createSelectOption(e.target, selectOption);

      if (e.target.tagName === "IMG" || e.target.tagName === "P")
        createSelectOption(e.target, selectOption);
    });
  }
}

export { createContentProjectItem };
