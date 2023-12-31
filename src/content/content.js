import "./content.css";
import { sidebarDiv, navItemDivs } from "../sidebar/sidebar";
import { createContent } from "./createContent";

let contentDiv;
let contents = [];

export function content() {
  contentDiv = document.createElement("div");
  contentDiv.setAttribute("id", "content-div");

  navItemDivs.forEach((item) => {
    createContent(item);
  });

  createContent(document.querySelector(".nav-item-projects"));

  sidebarDiv.addEventListener("click", function (e) {
    if (e.target.classList.contains("sidebar-icon")) return;
    if (e.target.tagName === "SPAN" || e.target.tagName === "P")
      createContent(e.target.closest(".nav-item"));
    else createContent(e.target);
  });

  createContent(document.querySelector(".nav-item-inbox"));

  return contentDiv;
}

export { contentDiv };
export { contents };
