export function updatePriority(priority, taskTitleBefore) {
  if (+priority === 4) taskTitleBefore.style.backgroundColor = "black";
  if (+priority === 3) taskTitleBefore.style.backgroundColor = "blue";
  if (+priority === 2) taskTitleBefore.style.backgroundColor = "orange";
  if (+priority === 1) taskTitleBefore.style.backgroundColor = "red";
}
