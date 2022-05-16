import { deleteProject } from "../project/project-edition-window/delete-project"

export function deleteToDo(todo, project) {
  const filtered = project.todos.filter(todoItem => todoItem != todo);
  project.todos = filtered;
  deleteProject(project.title);

  localStorage.setItem(project.title, JSON.stringify(project));
  window.location.reload();
}