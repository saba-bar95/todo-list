import "./sidebar.css";
import leftSvg from "/src/icons/arrow-left.svg";
import plusSvg from "/src/icons/plus-box.svg";
import downSvg from "/src/icons/arrow-down.svg";
import deleteSvg from "/src/icons/delete.svg";
import newProject from "./newproject/ newProject";
import deleteProject from "./deleteproject/deleteProject";

let sidebarDiv;
let leftIcon;
let plusIcon;
let createProjectItem;
let navItemDivs = [];
let projectItems;
let projectItemsArr = [];

export function sidebar() {
  sidebarDiv = document.createElement("div");
  sidebarDiv.setAttribute("id", "sidebar-div");

  const nav = document.createElement("ul");
  nav.classList.add("sidebar-nav");
  sidebarDiv.appendChild(nav);

  const navItems = ["inbox", "today", "projects"];

  navItems.forEach((el) => {
    const navItem = document.createElement("li");
    navItem.classList.add("nav-item", `nav-item-${el}`);
    nav.appendChild(navItem);

    const projectName = document.createElement("p");
    projectName.classList.add("project-name");
    projectName.textContent = el;
    navItem.appendChild(projectName);

    if (el !== "projects") {
      navItemDivs.push(navItem);
      const navSpan = document.createElement("span");
      navSpan.classList.add("nav-span", "hidden");
      navSpan.textContent = 0;
      navItem.appendChild(navSpan);

      navItem.addEventListener("mouseover", function () {
        navSpan.classList.toggle("hidden");
      });

      navItem.addEventListener("mouseleave", function () {
        navSpan.classList.toggle("hidden");
      });
    }
    if (el === "projects") {
      const rightSide = document.createElement("div");
      rightSide.classList.add("projects-rightside");
      navItem.appendChild(rightSide);

      leftIcon = new Image();
      leftIcon.src = leftSvg;
      leftIcon.classList.add("sidebar-icon", "left-icon");
      leftIcon.setAttribute("title", "Collapse Projects");
      rightSide.appendChild(leftIcon);

      plusIcon = new Image();
      plusIcon.src = plusSvg;
      plusIcon.classList.add("sidebar-icon", "plus-icon");
      plusIcon.setAttribute("title", "Add new project");
      rightSide.appendChild(plusIcon);

      leftIcon.addEventListener("click", function () {
        projectContainer.classList.toggle("hidden");
        if (projectContainer.classList.contains("hidden")) {
          leftIcon.src = downSvg;
          leftIcon.setAttribute("title", "Expand Projects");
        } else {
          leftIcon.setAttribute("title", "Collapse Projects");
          leftIcon.src = leftSvg;
        }
      });

      plusIcon.addEventListener("click", function () {
        newProject();
      });
    }
  });

  const projectContainer = document.createElement("ul");
  projectContainer.classList.add("projects-container");
  sidebarDiv.appendChild(projectContainer);

  projectItems = ["work", "home", "gym"];

  createProjectItem = function (el) {
    const projectItem = document.createElement("li");
    projectItem.classList.add("nav-item", "project-item", `project-item-${el}`);
    projectContainer.appendChild(projectItem);
    navItemDivs.push(projectItem);

    const projectName = document.createElement("p");
    projectName.classList.add("project-name");
    projectName.textContent = el;
    projectItem.appendChild(projectName);

    const navSpan = document.createElement("span");
    navSpan.classList.add("nav-span", "hidden");
    navSpan.textContent = 0;
    projectItem.appendChild(navSpan);

    const deleteIcon = new Image();
    deleteIcon.src = deleteSvg;
    deleteIcon.classList.add("sidebar-icon", "hidden");
    deleteIcon.style.float = "right";
    projectItem.appendChild(deleteIcon);

    projectItem.addEventListener("mouseenter", function () {
      deleteIcon.classList.toggle("hidden");
      navSpan.classList.toggle("hidden");
    });

    projectItem.addEventListener("mouseleave", function () {
      deleteIcon.classList.toggle("hidden");
      navSpan.classList.toggle("hidden");
    });

    deleteIcon.addEventListener("click", function () {
      deleteProject(deleteIcon);
    });

    projectItemsArr.push(projectItem);
  };

  projectItems.forEach((el) => {
    createProjectItem(el);
  });

  return sidebarDiv;
}

export {
  sidebarDiv,
  navItemDivs,
  createProjectItem,
  projectItems,
  projectItemsArr,
};
