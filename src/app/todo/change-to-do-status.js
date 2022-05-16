import { deleteProject } from "../project/project-edition-window/delete-project";

export function changeToDoStatus(todo, project) {
  const indexOf = project.todos.indexOf(todo);
  todo.finished = !(todo.finished);
  project.todos[indexOf] =  todo;
  deleteProject(project.title);
  localStorage.setItem(project.title, JSON.stringify(project));
  window.location.reload();
}