import { Section } from "./state.interface";

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
export const newBranchSection = () => ({
  type: 'NEW_BRANCH_SECTION'
});

export const cancelBranchSection = () => ({
  type: 'CANCEL_BRANCH_SECTION'
});

export const renameBranchSection = (name: string) => ({
  type: 'RENAME_BRANCH_SECTION',
  payload: {name}
});