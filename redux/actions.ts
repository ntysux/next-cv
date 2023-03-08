import { BasicLayout, Section } from "./state.interface";

// for main
export const create = () => ({
  type: 'CREATE'
});

export const setColorTheme = (color: string) => ({
  type: 'SET_COLOR',
  payload: {color}
});

export const rename = (name: string) => ({
  type: 'RENAME',
  payload: {name}
});

export const changeMode = (mode: boolean) => ({
  type: 'CHANGE_MODE',
  payload: {mode}
});

export const mergeSectionCreate = (section: Section) => ({
  type: 'MERGE_SECTION_CREATE',
  payload: {section}
});

// for branch
export const cancelBranchSection = () => ({
  type: 'CANCEL_BRANCH_SECTION'
});

export const renameBranchSection = (name: string) => ({
  type: 'RENAME_BRANCH_SECTION',
  payload: {name}
});

export const addNoteBranchSection = () => ({
  type: 'ADD_NOTE_BRANCH_SECTION'
});

export const setNoteValueBranchSection = (index: number, value: string) => ({
  type: 'SET_NOTE_VALUE_BRANCH_SECTION',
  payload: {index, value}
});

export const removeLayoutItemBranchSection = (index: number) => ({
  type: 'REMOVE_LAYOUT_ITEM_BRANCH_SECTION',
  payload: {index}
});

export const addImageBranchSection = (isAvatar: boolean) => ({
  type: 'ADD_IMAGE_BRANCH_SECTION',
  payload: {isAvatar}
});

export const setUrlImageBranchSection = (index: number, url: string, isAvatar: boolean) => ({
  type: 'SET_URL_IMAGE_BRANCH_SECTION',
  payload: {index, url, isAvatar}
});

export const addBasicBranchSection = () => ({
  type: 'ADD_BASIC_BRANCH_SECTION'
});

export const setBasicTitleBranchSection = (index: number, currentBasic: BasicLayout, title: string) => ({
  type: 'SET_BASIC_TITLE_BRANCH_SECTION',
  payload: {index, currentBasic, title}
});

export const setBasicContentBranchSection = (index: number, currentBasic: BasicLayout, content: string) => ({
  type: 'SET_BASIC_CONTENT_BRANCH_SECTION',
  payload: {index, currentBasic, content}
});

export const addSimpleBranchSection = () => ({
  type: 'ADD_SIMPLE_BRANCH_SECTION'
});