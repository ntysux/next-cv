import { Action, Section } from "./state.interface";

const branchReducer = (section: Section = {}, action: Action) => {
  switch(action.type) {
    case 'NEW_BRANCH_SECTION':
      return {name: 'Untited'}
    case 'CANCEL_BRANCH_SECTION':
      return {}
    case 'RENAME_BRANCH_SECTION':
      return {...section, name: action.payload.name}
    default:
      return section
  }
}
  
export default branchReducer;