// MAIN

export const main = document.querySelector('main');

export function getProjectsFromStorage() {
    let values = [],
    keys = Object.keys(localStorage),
    i = keys.length;
    keys.forEach(key => {
        values.push(localStorage.getItem(key))
    });
    return values;
}


export function createListHeader() {
    const headerParagraph = document.createElement('p');
    headerParagraph.textContent = "YOUR PROJECTS";      
    main.appendChild(headerParagraph);
}

export function createProjectList(projectsFromStorage) {        
    const ol = document.createElement('ol');
    projectsFromStorage.forEach(project => {
        const newProject = document.createElement('li');
        ol.appendChild(newProject);
    });

    const listContainer = document.createElement('div');
    listContainer.appendChild(ol);
    main.appendChild(listContainer);
}

export function createMainContent(projectsFromStorage) {
    createListHeader();
    createProjectList(projectsFromStorage);
}


export function startUp () {
    const projectsFromStorage = getProjectsFromStorage();
    
    if (projectsFromStorage.length == 0) {
        appendNoTodosMessage()
    } else {
        createMainContent(projectsFromStorage);
    }
}

