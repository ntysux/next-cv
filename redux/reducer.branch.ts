import { Action, DisplayDataType, Section } from "./state.interface";

const initSection: Section = {
  name: 'Untited',
  data: []
};

const branchReducer = (section = initSection, action: Action): Section => {
  switch(action.type) {
    case 'CANCEL_SECTION':
      return initSection;
    case 'RENAME_SECTION':
      return {...section, name: action.payload.name};
    case 'ADD_NOTE_SECTION':
      return {
        ...section,
        data: [
          ...section.data,
          {type: DisplayDataType.Note}
        ]
      };
    case 'SET_NOTE_CONTENT_SECTION':
      return {
        ...section,
        data: [
          ...section.data.slice(0, action.payload.index),
          {
            ...action.payload.currentNote,
            content: action.payload.content
          },
          ...section.data.slice(action.payload.index + 1)
        ]
      };
    case 'ADD_IMAGE_SECTION':
      return {
        ...section,
        data: [
          ...section.data,
          { 
            type: DisplayDataType.Image,
            isAvatar: action.payload.isAvatar
          }
        ]
      };
    case 'SET_IMAGE_URL_SECTION':
      return {
        ...section,
        data: [
          ...section.data.slice(0, action.payload.index),
          { 
            ...action.payload.currentImage,
            url: action.payload.url
          },
          ...section.data.slice(action.payload.index + 1)
        ]
      };
    case 'ADD_BASIC_SECTION':
      return {
        ...section,
        data: [
          ...section.data,
          {type: DisplayDataType.Basic}
        ]
      };
    case 'SET_BASIC_TITLE_SECTION':
      return {
        ...section,
        data: [
          ...section.data.slice(0, action.payload.index),
          { 
            ...action.payload.currentBasic,
            title: action.payload.title
          },
          ...section.data.slice(action.payload.index + 1)
        ]
      };
    case 'SET_BASIC_CONTENT_SECTION':
      return {
        ...section,
        data: [
          ...section.data.slice(0, action.payload.index),
          { 
            ...action.payload.currentBasic,
            content: action.payload.content
          },
          ...section.data.slice(action.payload.index + 1)
        ]
      };
    case 'ADD_SIMPLE_SECTION':
      return {
        ...section,
        data: [
          ...section.data,
          {type: DisplayDataType.Simple}
        ]
      };
    case 'SET_SIMPLE_CONTENT_SECTION':
      return {
        ...section,
        data: [
          ...section.data.slice(0, action.payload.index),
          { 
            ...action.payload.currentSimple,
            content: action.payload.content
          },
          ...section.data.slice(action.payload.index + 1)
        ]
      };
    case 'REMOVE_DATA_SECTION':
      return {
        ...section,
        data: [
          ...section.data.slice(0, action.payload.index),
          ...section.data.slice(action.payload.index + 1)
        ]
      };
    case 'UPDATE_SECTION':
      return {...action.payload.section}
    default:
      return section;
  }
};
  
export default branchReducer;