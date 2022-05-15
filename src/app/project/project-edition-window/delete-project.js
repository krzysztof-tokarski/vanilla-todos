export function deleteProject(projectTitle) {
  localStorage.removeItem(projectTitle);
  window.location.reload();
}