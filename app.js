const form = document.querySelector(".add-items-box");

form.addEventListener("submit", addNewTask);

const input = document.querySelector(".new-task-text");

const button = document.querySelector(".add-button");

const toDoList = document.querySelector("#things-to-do");

colorButton.addEventListener("click", toggleColor);

function addNewTask(event) {
  event.preventDefault();
  const newTask = input.value;
  const taskItem = document.createElement("li");
  taskItem.classList = "list-item";
  const deleteButton = document.createElement("button");

  deleteButton.classList = "delete";
  taskItem.appendChild(document.createTextNode(newTask));
  deleteButton.appendChild(document.createTextNode("X"));
  taskItem.appendChild(deleteButton);
  toDoList.appendChild(taskItem);
}
