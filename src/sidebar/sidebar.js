import "./sidebar.css";
import leftSvg from "/src/icons/arrow-left.svg";
import plusSvg from "/src/icons/plus-box.svg";
import downSvg from "/src/icons/arrow-down.svg";

let sidebarDiv;
let leftIcon;
let plusIcon;

export function sidebar() {
  sidebarDiv = document.createElement("div");
  sidebarDiv.setAttribute("id", "sidebar-div");

  const nav = document.createElement("ul");
  nav.classList.add("sidebar-nav");

  const navItems = ["inbox", "today", "projects"];

  navItems.forEach((el) => {
    const navItem = document.createElement("li");
    navItem.classList.add("nav-item");
    navItem.textContent = el;
    nav.appendChild(navItem);

    if (el === "projects") {
      navItem.classList.add("nav-item-project");

      const rightSide = document.createElement("div");
      rightSide.classList.add("projects-rightside");
      navItem.appendChild(rightSide);

      leftIcon = new Image();
      leftIcon.src = leftSvg;
      leftIcon.classList.add("sidebar-icon", "left-icon");
      rightSide.appendChild(leftIcon);

      plusIcon = new Image();
      plusIcon.src = plusSvg;
      plusIcon.classList.add("sidebar-icon", "plus-icon");
      rightSide.appendChild(plusIcon);
    }
  });

  const projectContainer = document.createElement("ul");
  projectContainer.classList.add("projects-container");

  const projectItems = ["work", "home", "gym"];

  projectItems.forEach((el) => {
    const projectItem = document.createElement("li");
    projectItem.classList.add("nav-item", "project-item");
    projectItem.textContent = el;
    projectContainer.appendChild(projectItem);
  });

  leftIcon.addEventListener("click", function () {
    projectContainer.classList.toggle("hidden");
    if (projectContainer.classList.contains("hidden")) leftIcon.src = downSvg;
    else leftIcon.src = leftSvg;
  });

  sidebarDiv.appendChild(nav);
  sidebarDiv.appendChild(projectContainer);

  return sidebarDiv;
}

export { sidebarDiv };
