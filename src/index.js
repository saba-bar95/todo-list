import "./index.css";
import { header } from "./header/header";
import { sidebar } from "./sidebar/sidebar";
import { content } from "./content/content";

const body = document.querySelector("body");

body.appendChild(header());
body.appendChild(sidebar());
body.appendChild(content());

export { body };
