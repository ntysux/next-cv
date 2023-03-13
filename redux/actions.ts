import { Basic, Image, Note, Section, Simple } from "./state.interface";

// for main
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

export const mergeSectionUpdate = (index: number, section: Section) => ({
  type: 'MERGE_SECTION_UPDATE',
  payload: {index, section}
});

// for branch
export const cancelSection = () => ({
  type: 'CANCEL_SECTION'
});

export const renameSection = (name: string) => ({
  type: 'RENAME_SECTION',
  payload: {name}
});

export const addNoteSection = () => ({
  type: 'ADD_NOTE_SECTION'
});

export const setNoteContentSection = (index: number, currentNote: Note, content: string) => ({
  type: 'SET_NOTE_CONTENT_SECTION',
  payload: {index, currentNote, content}
});

export const removeDataSection = (index: number) => ({
  type: 'REMOVE_DATA_SECTION',
  payload: {index}
});

export const addImageSection = (isAvatar: boolean) => ({
  type: 'ADD_IMAGE_SECTION',
  payload: {isAvatar}
});

export const setImageUrlSection = (index: number, currentImage: Image, url: string) => ({
  type: 'SET_IMAGE_URL_SECTION',
  payload: {index, currentImage, url}
});

export const addBasicSection = () => ({
  type: 'ADD_BASIC_SECTION'
});

export const setBasicTitleSection = (index: number, currentBasic: Basic, title: string) => ({
  type: 'SET_BASIC_TITLE_SECTION',
  payload: {index, currentBasic, title}
});

export const setBasicContentSection = (index: number, currentBasic: Basic, content: string) => ({
  type: 'SET_BASIC_CONTENT_SECTION',
  payload: {index, currentBasic, content}
});

export const addSimpleSection = () => ({
  type: 'ADD_SIMPLE_SECTION'
});

export const setSimpleContentSection = (index: number, currentSimple: Simple, content: string) => ({
  type: 'SET_SIMPLE_CONTENT_SECTION',
  payload: {index, currentSimple, content}
});

export const updateSection = (section: Section) => ({
  type: 'UPDATE_SECTION',
  payload: {section}
});