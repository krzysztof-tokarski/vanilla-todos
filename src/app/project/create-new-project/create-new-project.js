import { ProjectClass } from "../../models/models-module";

export function createNewProject(project) {

    const formInputs = document.getElementsByClassName('form-input');
    const newProjectTitle = formInputs[0].value;
    const newProjectDescription = formInputs[1].value;
    const newProjectDueDate = formInputs[2].value;
    const newProjectPriority = formInputs[3].value;
  
    const newProject = new ProjectClass(newProjectTitle, newProjectDescription,newProjectDueDate, newProjectPriority);

    if (project != undefined) {
      newProject.todos = project.todos;
    }
  
    localStorage.setItem(newProjectTitle, JSON.stringify(newProject));
  
    const fluidContainer = document.querySelector('.fluid-container');
    fluidContainer.innerHTML = '';
    window.location.reload();
}