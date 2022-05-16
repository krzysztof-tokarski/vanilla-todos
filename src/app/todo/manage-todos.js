import { createNewForm } from "../shared/create-new-form";
import { openEditToDoWindow } from "./edit-todo";

export function openManageTodosWindow(project) {

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
  h3.textContent = `MANAGE TODOS FOR ${project.title.toUpperCase()}`;
  form.appendChild(h3);


  if (project.todos == undefined || project.todos.length === 0) {
    const p = document.createElement('p');
    p.textContent = 'This project currently has no ToDos.';
    p.classList.add('no-todos');
    form.appendChild(p);
  } else {
    const todosContainer = document.createElement('div');
    todosContainer.classList.add('todos-container')
    project.todos.forEach(todo => {
      const button = document.createElement('button');
      button.textContent = todo.title;
      if (todo.finished) {
        button.style.backgroundColor = "green";
      }
      button.setAttribute('type', 'button')
      button.addEventListener('click', () => openEditToDoWindow(todo, project))
      todosContainer.appendChild(button);
    });
    form.appendChild(todosContainer);
  }
  const createToDoButton = document.createElement('button');
  createToDoButton.classList.add('form-button');
  createToDoButton.textContent = 'Add ToDo';
  createToDoButton.addEventListener('click', () => createNewForm("ADD NEW TODO", project));
  createToDoButton.setAttribute('type','button');
  form.appendChild(createToDoButton);

  fluidContainer.appendChild(form)
}