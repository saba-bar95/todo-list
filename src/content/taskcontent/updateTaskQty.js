export function updateTaskQty(value, acc = 0) {
  let counter = 0 + acc;
  if (value.tagName === "IMG") {
    counter = 1;
    value = value.closest(".content-container").querySelector("h1").textContent;
  }

  const navSpans = document.querySelectorAll(".nav-span");
  navSpans.forEach((el) => {
    if (
      el.closest(`.nav-item-${value}`) ||
      el.closest(`.project-item-${value}`)
    ) {
      el.textContent =
        document
          .querySelector(`.content-${value}`)
          .querySelector(".task-items-container").childElementCount - counter;
    }
  });
}
