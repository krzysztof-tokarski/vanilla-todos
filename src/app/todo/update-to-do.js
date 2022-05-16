import { ToDoClass } from "../models/models-module";
import { deleteProject } from "../project/project-edition-window/delete-project";

export function updateToDo(todo, project) {
  const indexOf = project.todos.indexOf(todo);
  const formInputs = document.getElementsByClassName('form-input');
  const newToDoTitle = formInputs[0].value;
  const newToDoDescription = formInputs[1].value;
  const newToDoDueDate = formInputs[2].value;
  const newToDoPriority = formInputs[3].value;

  const newTodo = new ToDoClass(newToDoTitle, newToDoDescription, newToDoDueDate, newToDoPriority);

  project.todos[indexOf] =  newTodo;
  deleteProject(project.title);
  localStorage.setItem(project.title, JSON.stringify(project));
  window.location.reload();
}