import { createNewForm } from "../shared/create-new-form";
import { deleteProject } from "../project/project-edition-window/delete-project";

export function openEditToDoWindow(todo, project) {
  const pseudoEnum = `EDITING TODO ${(todo.title).toUpperCase()} FOR PROJECT ${project.title.toUpperCase()}`;
  createNewForm(pseudoEnum, todo, project);

}