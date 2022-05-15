import { createNewForm } from "../shared/create-new-form";

export function openManageTodosWindow(project) {

  const pseudoEnum = `Manage ToDos for ${project.title}`;

  const existingForm = document.querySelector('.form');

  if (existingForm) {
      existingForm.remove();
  }

  const fluidContainer = document.querySelector('.fluid-container');
  if (fluidContainer != undefined) {
      fluidContainer.innerHTML = '';
  }

  const formContainer = document.createElement('div');
  formContainer.classList.add('manage-todos-form-form-container');
  const form = document.createElement('form');
  form.classList.add('form');
  const h3 = document.createElement('h3');
  h3.classList.add('form-header');
  h3.textContent = `Manage ToDos for ${project.title}`;
  form.appendChild(h3);


  if (project.todos == undefined || project.todos.length === 0) {
    const p = document.createElement('p');
    p.textContent = 'This project currently has no ToDos.';
    p.classList.add('no-todos');
    form.appendChild(p);
  } else {
    const ol = document.createElement('ol');
    project.todos.forEach(todo => {
      const input = document.createElement('input');
      input.value = todo.content;
      input.classList.add('form-input');
      const li = document.createElement('li');
      li.appendChild(input)
      ol.appendChild(li);
    });
    form.appendChild(ol);
  }
  const createToDoButton = document.createElement('button');
  createToDoButton.classList.add('form-button');
  createToDoButton.textContent = 'Add ToDo';
  createToDoButton.addEventListener('click', () => createNewForm("ADD NEW TODO"));
  createToDoButton.setAttribute('type','button');
  form.appendChild(createToDoButton);

  fluidContainer.appendChild(form)
}