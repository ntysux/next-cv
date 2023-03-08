import { Action, BasicLayout, Section } from "./state.interface";

const initSection: Section = {
  name: 'Untited',
  chil: []
}

const branchReducer = (section: Section = initSection, action: Action): Section => {
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
          {
            type: 'note',
            value: ''
          }
        ]
      }
    case 'SET_NOTE_VALUE_BRANCH_SECTION':
      return {
        ...section,
        chil: [
          ...section.chil.slice(0, action.payload.index),
          {
            type: 'note',
            value: action.payload.value
          },
          ...section.chil.slice(action.payload.index + 1)
        ]
      }
    case 'ADD_IMAGE_BRANCH_SECTION':
      return {
        ...section,
        chil: [
          ...section.chil,
          { 
            type: 'image',
            url: '',
            isAvatar: action.payload.isAvatar
          }
        ]
      }
    case 'SET_URL_IMAGE_BRANCH_SECTION':
      return {
        ...section,
        chil: [
          ...section.chil.slice(0, action.payload.index),
          { 
            type: 'image',
            url: action.payload.url,
            isAvatar: action.payload.isAvatar
          },
          ...section.chil.slice(action.payload.index + 1)
        ]
      }
    case 'ADD_BASIC_BRANCH_SECTION':
      return {
        ...section,
        chil: [
          ...section.chil,
          {
            type: 'basic'
          }
        ]
      }
    case 'SET_BASIC_TITLE_BRANCH_SECTION':
      return {
        ...section,
        chil: [
          ...section.chil.slice(0, action.payload.index),
          { 
            ...action.payload.currentBasic,
            title: action.payload.title,
          },
          ...section.chil.slice(action.payload.index + 1)
        ]
      }
    case 'SET_BASIC_CONTENT_BRANCH_SECTION':
      return {
        ...section,
        chil: [
          ...section.chil.slice(0, action.payload.index),
          { 
            ...action.payload.currentBasic,
            content: action.payload.content,
          },
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