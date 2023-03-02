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