import "./content.css";
import { sidebarDiv } from "../sidebar/sidebar";
import { createContent } from "./createContent";

let contentDiv;
let contents = [];

export function content() {
  contentDiv = document.createElement("div");
  contentDiv.setAttribute("id", "content-div");

  createContent(document.querySelector(".nav-item-projects"));

  sidebarDiv.addEventListener("click", function (e) {
    createContent(e.target);
  });

  return contentDiv;
}

export { contentDiv };
export { contents };
