import {createNewForm} from '../../shared/create-new-form';

export function createProjectEditionWindow(project){

  const pseudoEnum = `Editing ${(project.title).toUpperCase()} `;
  createNewForm(pseudoEnum, project);

}

  // const formHeader = document.querySelector('.form-header');
  // formHeader.textContent = `Editing ${(project.title).toUpperCase()} `;

  // const formInputs = document.getElementsByClassName('form-input');
  
  // const titleInput = formInputs[0];
  // const descriptionInput = formInputs[1];
  // const dueDateInput = formInputs[2];
  // const priorityInput = formInputs[3];

  // titleInput.value = project.title;
  // descriptionInput.value = project.description;
  // dueDateInput.value = project.dueDate;
  // priorityInput.value = project.priority;

  // const submitButton = document.querySelector('.form-button');
  // submitButton.remove();
    
  // const buttonsContainer = document.querySelector('.form-buttons-container');

  // const updateButton = document.createElement('button');
  // updateButton.classList.add('form-button');
  // updateButton.textContent = 'Confirm changes';
  // updateButton.addEventListener('click', () => updateProject(project));
  // buttonsContainer.appendChild(updateButton);

  // const deleteButton =  document.createElement('button');
  // deleteButton.textContent = 'Delete project';
  // deleteButton.classList.add('form-button');
  // deleteButton.addEventListener('click',() => deleteProject(project.title));
  // buttonsContainer.appendChild(deleteButton);

  // const manageTodosButton = document.createElement('button');
  // manageTodosButton.textContent = "Manage Project's ToDos";
  // manageTodosButton.classList.add('form-button');
  // manageTodosButton.addEventListener('click', () => openManageTodosWindow(project));
  // buttonsContainer.appendChild(manageTodosButton);

  // const buttons = document.querySelectorAll('button');

  // buttons.forEach(button => {
  //   button.setAttribute('type', 'button');
  // })


  // const form = document.querySelector('.form');
  // form.appendChild(buttonsContainer);