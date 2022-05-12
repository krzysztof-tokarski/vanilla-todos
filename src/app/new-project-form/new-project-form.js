import { createNewProject } from "./create-new-project";

export function createProjectForm() {

    const existingForm = document.querySelector('.form');

    if (existingForm) {
        existingForm.remove();
    }

    const fluidContainer = document.querySelector('.fluid-container');
    if (fluidContainer != undefined) {
        fluidContainer.innerHTML = '';
    }

    const formContainer = document.createElement('div');
    formContainer.classList.add('new-project-form-form-container');
    const form = document.createElement('form');
    form.classList.add('form');
    const header = document.createElement('p');
    header.classList.add('form-header');
    header.textContent = 'NEW PROJECT FORM';
    form.appendChild(header);
    const titleField = document.createElement('input');
    const descriptionField = document.createElement('textarea');
    const dueDateField = document.createElement('input');
    const priorityField = document.createElement('input');

    const inputs = [
    {input: titleField, label: "PROJECT NAME"},
    {input: descriptionField, label: "DESCRIPTION"},
    {input: dueDateField, label: "DUE DATE"},
    {input: priorityField, label: "PRIORITY"}]
    

    inputs.forEach(input => {
        input.input.classList.add('form-input');
        const label = document.createElement('label');
        label.textContent = input.label;
        form.appendChild(label);
        form.appendChild(input.input);
    });

    const buttonsContainer = document.createElement('div');
    buttonsContainer.classList.add('form-buttons-container');

    const submitButton = document.createElement('button');
    submitButton.classList.add('form-button');
    submitButton.textContent = "Confirm";
    submitButton.setAttribute('type', 'button');
    submitButton.addEventListener('click',createNewProject);
    buttonsContainer.appendChild(submitButton);
    form.appendChild(buttonsContainer);
    fluidContainer.appendChild(form);
}

