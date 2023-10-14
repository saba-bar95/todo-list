import { contents } from "./content";

export default function deleteContent(item) {
  contents.forEach((el) => {
    if (el.classList.contains(`content-${item.textContent}`)) el.remove();
  });
}
