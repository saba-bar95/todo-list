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

export function sidebar() {
  sidebarDiv = document.createElement("div");
  sidebarDiv.setAttribute("id", "sidebar-div");

  const nav = document.createElement("ul");
  nav.classList.add("sidebar-nav");

  const navItems = ["inbox", "today", "projects"];

  navItems.forEach((el) => {
    const navItem = document.createElement("li");
    navItem.classList.add("nav-item", `nav-item-${el}`);
    navItem.textContent = el;
    nav.appendChild(navItem);

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
    }

    navItemDivs.push(navItem);
  });

  const projectContainer = document.createElement("ul");
  projectContainer.classList.add("projects-container");

  projectItems = ["work", "home", "gym"];

  createProjectItem = function (el) {
    const projectItem = document.createElement("li");
    projectItem.classList.add("nav-item", "project-item", `project-item-${el}`);
    projectItem.textContent = el;
    projectContainer.appendChild(projectItem);
    navItemDivs.push(projectItem);

    const deleteIcon = new Image();
    deleteIcon.src = deleteSvg;
    deleteIcon.classList.add("sidebar-icon", "hidden");
    deleteIcon.style.float = "right";
    projectItem.appendChild(deleteIcon);

    projectItem.addEventListener("mouseenter", function () {
      deleteIcon.classList.toggle("hidden");
    });

    projectItem.addEventListener("mouseleave", function () {
      deleteIcon.classList.toggle("hidden");
    });

    deleteIcon.addEventListener("click", function () {
      deleteProject(deleteIcon);
    });
  };

  projectItems.forEach((el) => {
    createProjectItem(el);
  });

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

  sidebarDiv.appendChild(nav);
  sidebarDiv.appendChild(projectContainer);

  return sidebarDiv;
}

export { sidebarDiv, navItemDivs };
export { createProjectItem };
export { projectItems };
