import { createNewProject } from "../create-new-project/create-new-project";

export function updateProject(project) {
  localStorage.removeItem(project.title);
  createNewProject(project);
}