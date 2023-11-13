import "./header.css";
import menuSvg from "/src/icons/menu.svg";
import plusSvg from "/src/icons/plus-box.svg";
import { sidebarDiv } from "../sidebar/sidebar";
import { contentDiv } from "../content/content";
import { taskContent } from "../content/taskcontent/taskContent";

export function header() {
  const headerDiv = document.createElement("div");
  headerDiv.setAttribute("id", "header-div");

  const headerRightSide = document.createElement("div");
  headerRightSide.classList.add("header-rightside");
  headerDiv.appendChild(headerRightSide);

  const menuIcon = new Image();
  menuIcon.classList.add("header-icon", "menu-icon");
  menuIcon.src = menuSvg;
  headerRightSide.appendChild(menuIcon);

  const headerText = document.createElement("h1");
  headerText.classList.add("header-text");
  headerText.textContent = "Todo List";
  headerRightSide.appendChild(headerText);

  const plusIcon = new Image();
  plusIcon.classList.add("header-icon", "plus-icon");
  plusIcon.src = plusSvg;
  headerDiv.appendChild(plusIcon);

  menuIcon.addEventListener("click", function () {
    sidebarDiv.classList.toggle("hidden");
    if (sidebarDiv.classList.contains("hidden"))
      contentDiv.style.gridColumn = "1/-1";
    else contentDiv.style.gridColumn = "2/-1";
  });

  plusIcon.addEventListener("click", function () {
    taskContent();
  });

  return headerDiv;
}
