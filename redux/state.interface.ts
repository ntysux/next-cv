enum DisplayDataType {
  Basic = 'basic',
  Simple = 'simple',
  Image= 'image',
  Note= 'note'
}

export interface Simple {
  type: DisplayDataType.Simple,
  content?: string
}

export interface Basic {
  type: DisplayDataType.Basic,
  title?: string,
  content?: string
}

export interface Image {
  type: DisplayDataType.Image,
  url?: string,
  isAvatar: boolean
}

export interface Note {
  type: DisplayDataType.Note,
  content?: string
}

export type DisplayData = Basic | Simple | Image | Note

export interface Section {
  name: string,
  data: DisplayData[]
}

export interface Cv {
  name: string,
  color: string,
  mode: boolean,
  pin: number | null,
  section: Section[]
}

export interface Action {
  type: string,
  payload?: any
}