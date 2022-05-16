import { ToDoClass } from "../models/models-module";

export function createToDo(project) {
  localStorage.removeItem(project.title);

  const formInputs = document.getElementsByClassName('form-input');
  const newToDoTitle = formInputs[0].value;
  const newToDoDescription = formInputs[1].value;
  const newToDoDueDate = formInputs[2].value;
  const newToDoPriority = formInputs[3].value;

  const newTodo = new ToDoClass(newToDoTitle, newToDoDescription, newToDoDueDate, newToDoPriority);
  project.todos.push(newTodo);

  localStorage.setItem(project.title, JSON.stringify(project));

  const fluidContainer = document.querySelector('.fluid-container');
  fluidContainer.innerHTML = '';
  window.location.reload();
}