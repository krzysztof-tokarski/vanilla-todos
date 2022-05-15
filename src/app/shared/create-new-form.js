import {createNewProject} from '../project/create-new-project/create-new-project';
import {deleteProject} from '../project/project-edition-window/delete-project';
import {updateProject} from '../project/project-edition-window/update-project';
import {openManageTodosWindow} from '../todo/manage-todos';

export function createNewForm(pseudoEnum, project) {
    
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
        primaryButton.addEventListener('click',() => createToDo(project));
        buttonsContainer.appendChild(primaryButton);
    } else {
        const split = pseudoEnum.split(' ');
        if (split[0] == "Editing") {
            primaryButton.addEventListener('click',() => updateProject(project));
            buttonsContainer.appendChild(primaryButton);
            const deleteButton =  document.createElement('button');
            deleteButton.textContent = 'Delete project';
            deleteButton.classList.add('form-button');
            deleteButton.addEventListener('click',() => deleteProject(project.title));
            deleteButton.setAttribute('type', 'button');
            buttonsContainer.appendChild(deleteButton);
    
            const manageTodosButton = document.createElement('button');
            manageTodosButton.textContent = "Manage Project's ToDos";
            manageTodosButton.classList.add('form-button');
            manageTodosButton.addEventListener('click', () => openManageTodosWindow(project));
            manageTodosButton.setAttribute('type', 'button');
            buttonsContainer.appendChild(manageTodosButton);

            const formInputs = document.getElementsByClassName('form-input');

            console.log(formInputs);
            
            const titleInput = formInputs[0];
            const descriptionInput = formInputs[1];
            const dueDateInput = formInputs[2];
            const priorityInput = formInputs[3];

            titleInput.value = project.title;
            descriptionInput.value = project.description;
            dueDateInput.value = project.dueDate;
            priorityInput.value = project.priority;
        }
    }

    form.appendChild(buttonsContainer);

}

