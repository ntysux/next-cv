import { Action, Section } from "./state.interface";

const initSection: Section = {
  name: 'Untited',
  chil: []
}

const branchReducer = (section = initSection, action: Action) => {
  switch(action.type) {
    case 'CANCEL_BRANCH_SECTION':
      return initSection
    case 'RENAME_BRANCH_SECTION':
      return {...section, name: action.payload.name}
    case 'ADD_NOTE_BRANCH_SECTION':
      return {
        ...section,
        chil: [
          ...section.chil,
          {note: ''}
        ]
      }
    default:
      return section
  }
}
  
export default branchReducer;