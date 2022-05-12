// CORE;
export const main = document.querySelector('main');
import {createProjectForm} from './new-project-form/new-project-form';
import { createProjectEditionWindow } from './project-edition-window/project-edition-window';

export function startUp () {
    const projectsFromStorage = getProjectsFromStorage();
    
    if (projectsFromStorage.length == 0) {
        appendNoTodosMessage()
    } else {
        createMainContent(projectsFromStorage);
    };
    prepareNecessaryElements() 
}

export function getProjectsFromStorage() {
    let values = [],
    keys = Object.keys(localStorage),
    i = keys.length;
    keys.forEach(key => {
        values.push(localStorage.getItem(key))
    });
    return values;
}

export function appendNoTodosMessage() {
    const p = document.createElement('p');
    p.textContent = "You currently have no projects. Try adding a new one right now!";
    main.appendChild(p);
}

export function createMainContent(projectsFromStorage) {
    createProjectsList(projectsFromStorage);
}
export function createListHeader() {
    const headerParagraph = document.createElement('p');
    headerParagraph.textContent = "YOUR PROJECTS";
    headerParagraph.classList.add('projects-list-header');
    const listContainer = document.querySelector('.projects-list-container')     
    listContainer.appendChild(headerParagraph);
}

export function createProjectsList(projectsFromStorage) {
    const listContainer = document.createElement('div');
    listContainer.classList.add('projects-list-container');
    main.appendChild(listContainer);
    createListHeader();

    const ol = document.createElement('ol');
    ol.classList.add('projects-list')
    projectsFromStorage.forEach(project => {
        const projectFromStorage = JSON.parse(project);
        const projectListItem = document.createElement('button');
        projectListItem.textContent = projectFromStorage.title;
        projectListItem.classList.add('projects-list-item');
        projectListItem.addEventListener('click', () => createProjectEditionWindow(projectFromStorage));
        ol.appendChild(projectListItem);
    });

    listContainer.appendChild(ol);
}




export function prepareNecessaryElements() {
    createButtonsContainer();
    createFluidContainer()
}
export function createButtonsContainer() {
    const buttonsContainer = document.createElement('div');
    buttonsContainer.classList.add('buttons-container');
    const addProjectButton = document.createElement('button');
    addProjectButton.textContent = "ADD PROJECT";
    addProjectButton.classList.add('main-button');
    addProjectButton.addEventListener("click",createProjectForm);
    buttonsContainer.appendChild(addProjectButton);
    main.appendChild(buttonsContainer);
}
export function createFluidContainer() {
    const fluidContainer = document.createElement('div');
    fluidContainer.classList.add('fluid-container');
    main.appendChild(fluidContainer);
}








