import { createProjectForm } from "../new-project-form/new-project-form";
import { deleteProject } from "./delete-project";
import { updateProject } from "./update-project";


export function createProjectEditionWindow(project){

  createProjectForm();

  const formHeader = document.querySelector('.form-header');
  formHeader.textContent = `Editing ${(project.title).toUpperCase()} `;

  const formInputs = document.getElementsByClassName('form-input');
  
  const titleInput = formInputs[0];
  const descriptionInput = formInputs[1];
  const dueDateInput = formInputs[2];
  const priorityInput = formInputs[3];

  titleInput.value = project.title;
  descriptionInput.value = project.description;
  dueDateInput.value = project.dueDate;
  priorityInput.value = project.priority;

  const submitButton = document.querySelector('.form-button');
  submitButton.remove();
  const updateButton = document.createElement('button');
  updateButton.classList.add('form-button');
  updateButton.textContent = 'Confirm changes';
  updateButton.addEventListener('click', () => updateProject(project));
  const buttonsContainer = document.querySelector('.form-buttons-container');
  buttonsContainer.appendChild(updateButton);

  const deleteButton =  document.createElement('button');
  deleteButton.textContent = 'Delete project';
  deleteButton.classList.add('form-button');
  deleteButton.addEventListener('click',() => deleteProject(project.title));


  buttonsContainer.appendChild(deleteButton);

}