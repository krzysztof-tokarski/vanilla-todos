import {createNewForm} from '../../shared/create-new-form';

export function createProjectEditionWindow(project){

  const pseudoEnum = `EDITING PROJECT ${(project.title).toUpperCase()} `;
  createNewForm(pseudoEnum, project);

}
