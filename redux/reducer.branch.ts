import { Action, Section } from "./state.interface"

const branchReducer = (section: Section[] = [], action: Action) => {
  switch(action.type) {
    case 'NEW_BRANCH_SECTION':
      return [...section, {name: 'Untited'}]
    case 'CANCEL_BRANCH_SECTION':
      return [...section.slice(0, section.length - 1)]
    case 'RENAME_BRANCH_SECTION':
      return [
        ...section.slice(0, action.payload.index),
        {...section[action.payload.index], name: action.payload.name},
        ...section.slice(action.payload.index + 1)
      ]
    default:
      return section
  }
}
  
export default branchReducer;