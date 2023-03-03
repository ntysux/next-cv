import { Cv, Action } from "./state.interface";

const initCv: Cv = {
  name: 'Untited',
  color: '#5CF2E3',
  mode: false,
  pin: null,
  section: []
}

const mainReducer = (cv: Cv = initCv, action: Action) => {
  switch(action.type) {
    case 'CREATE':
      return cv
    case 'SET_COLOR':
      return {...cv, color: action.payload.color}
    case 'RENAME':
      return {...cv, name: action.payload.name}
    case 'CHANGE_MODE':
      return {...cv, mode: action.payload.mode}
    case 'WRAPPER_SECTION_CREATE':
      return {
        ...cv,
        section: [
          ...cv.section,
          action.payload.section
        ]
      } 
    default:
      return cv
  }
}

export default mainReducer;