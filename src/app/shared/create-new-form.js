import {createNewProject} from '../project/create-new-project/create-new-project';
import {deleteProject} from '../project/project-edition-window/delete-project';
import {updateProject} from '../project/project-edition-window/update-project';
import {openManageTodosWindow} from '../todo/manage-todos';
import { createToDo } from '../todo/create-to-do';
import { deleteToDo } from '../todo/delete-to-do';
import {changeToDoStatus} from '../todo/change-to-do-status';
import { updateToDo } from '../todo/update-to-do';

export function createNewForm(pseudoEnum, project, todo) {
    
    const existingForm = document.querySelector('.form');

    if (existingForm) {
        existingForm.remove();
    }
    const fluidContainer = document.querySelector('.fluid-container');
    if (fluidContainer != undefined) {
        fluidContainer.innerHTML = '';
    }

    const formContainer = document.createElement('div');
    formContainer.classList.add('new-form-container');
    const form = document.createElement('form');
    form.classList.add('form');
    const h3 = document.createElement('h3');
    h3.textContent = pseudoEnum;
    h3.classList.add('form-header');
    form.appendChild(h3);
    const titleField = document.createElement('input');
    const descriptionField = document.createElement('textarea');
    const dueDateField = document.createElement('input');
    const priorityField = document.createElement('input');

    const inputs = [
        {input: titleField, label: "NAME"},
        {input: descriptionField, label: "DESCRIPTION"},
        {input: dueDateField, label: "DUE DATE"},
        {input: priorityField, label: "PRIORITY"}];

    inputs.forEach(input => {
        input.input.classList.add('form-input');
        const label = document.createElement('label');
        label.textContent = input.label;
        form.appendChild(label);
        form.appendChild(input.input);
    });

    const buttonsContainer = document.createElement('div');
    buttonsContainer.classList.add('form-buttons-container');

    const primaryButton = document.createElement('button');
    primaryButton.classList.add('form-button');
    primaryButton.textContent = "Confirm";
    primaryButton.setAttribute('type', 'button');

    fluidContainer.appendChild(form);


    if (pseudoEnum == "NEW PROJECT FORM") {
        primaryButton.addEventListener('click',() => createNewProject());
        buttonsContainer.appendChild(primaryButton);
    } else if (pseudoEnum == "ADD NEW TODO") {
        h3.textContent = h3.textContent + ` TO ${project.title.toUpperCase()}`;
        primaryButton.addEventListener('click',() => createToDo(project));
        buttonsContainer.appendChild(primaryButton);
    } else {
        const split = pseudoEnum.split(' ');
        if (split[0] == "EDITING") {

            const formInputs = document.getElementsByClassName('form-input');
            const titleInput = formInputs[0];
            const descriptionInput = formInputs[1];
            const dueDateInput = formInputs[2];
            const priorityInput = formInputs[3];

            titleInput.value = project.title;
            descriptionInput.value = project.description;
            dueDateInput.value = project.dueDate;
            priorityInput.value = project.priority;

            const deleteButton =  document.createElement('button');
            deleteButton.classList.add('form-button');
            deleteButton.setAttribute('type', 'button');

            const manageTodosButton = document.createElement('button');
            manageTodosButton.classList.add('form-button');
            manageTodosButton.setAttribute('type', 'button');

            buttonsContainer.appendChild(primaryButton);
            buttonsContainer.appendChild(deleteButton);
            buttonsContainer.appendChild(manageTodosButton);

            if (split[1] == "PROJECT") {
                primaryButton.addEventListener('click',() => updateProject(project));
                deleteButton.textContent = 'Delete project';
                deleteButton.addEventListener('click',() => deleteProject(project.title));
                manageTodosButton.textContent = "Manage Project's ToDos";
                manageTodosButton.addEventListener('click', () => openManageTodosWindow(project));
            } else if (split[1] == "TODO") {
                primaryButton.addEventListener('click',() => updateToDo(project, todo));
                deleteButton.textContent = 'Delete ToDo';
                deleteButton.addEventListener('click',() => deleteToDo(project, todo));
                manageTodosButton.textContent = "Change status";
                manageTodosButton.addEventListener('click', () => changeToDoStatus(project, todo));
        }
    }
    }
    form.appendChild(buttonsContainer);

}