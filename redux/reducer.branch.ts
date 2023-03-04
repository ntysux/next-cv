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
    case 'SET_NOTE_VALUE_BRANCH_SECTION':
      return {
        ...section,
        chil: [
          ...section.chil.slice(0, action.payload.index),
          {note: action.payload.value},
          ...section.chil.slice(action.payload.index + 1)
        ]
      }
    case 'REMOVE_LAYOUT_ITEM_BRANCH_SECTION':
      return {
        ...section,
        chil: [
          ...section.chil.slice(0, action.payload.index),
          ...section.chil.slice(action.payload.index + 1)
        ]
      }
    default:
      return section
  }
}
  
export default branchReducer;