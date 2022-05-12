// CORE;
export const main = document.querySelector('main');
import { ProjectClass } from "./models/models-module";
import {createProjectForm} from './new-project-form/new-project-form'

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
    createListHeader();
    createProjectsList(projectsFromStorage);
}
export function createListHeader() {
    const headerParagraph = document.createElement('p');
    headerParagraph.textContent = "YOUR PROJECTS";
    headerParagraph.classList.add('projects-list-header')      
    main.appendChild(headerParagraph);
}
export function createProjectsList(projectsFromStorage) {        
    const ol = document.createElement('ol');
    ol.classList.add('projects-list')
    projectsFromStorage.forEach(project => {
        // TODO
        const newProject = document.createElement('li');
        newProject.classList.add('projects-list-item')
        ol.appendChild(newProject);
    });

    const listContainer = document.createElement('div');
    listContainer.appendChild(ol);
    listContainer.classList.add('project-list-container')
    main.appendChild(listContainer);
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
    addProjectButton.addEventListener("click",createProjectForm)
    buttonsContainer.appendChild(addProjectButton);
    main.appendChild(buttonsContainer);
}
export function createFluidContainer() {
    const fluidContainer = document.createElement('div');
    fluidContainer.classList.add('fluid-container');
    main.appendChild(fluidContainer);
}








