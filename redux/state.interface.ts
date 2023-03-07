export interface TableLayout {
  type: 'table' 
  th: string[],
  td: any[]
}
export interface BasicLayout {
  type: 'basic'
  title?: string,
  content?: string
}
export interface SimpleLayout {
  type: 'simple'
  value: string
}
export interface Image {
  type: 'image'
  url: string,
  isAvatar: boolean
}
export interface Note {
  type: 'note'
  value: string
}

export type Layout = TableLayout | BasicLayout | SimpleLayout | Image | Note

export interface Section {
  name: string,
  chil: Layout[]
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