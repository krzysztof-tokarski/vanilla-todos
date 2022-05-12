import { deleteProject } from "./delete-project";
import { createNewProject } from "../new-project-form/create-new-project";

export function updateProject(project) {
  deleteProject(project.title);
  createNewProject(project);
}