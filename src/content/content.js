import "./content.css";

let contentDiv;
export function content() {
  contentDiv = document.createElement("div");
  contentDiv.setAttribute("id", "content-div");

  return contentDiv;
}

export { contentDiv };
