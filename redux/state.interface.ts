export interface TableLayout {
  th: string[],
  td: any[]
}
export interface BasicLayout {
  name?: string,
  value?: string
}
export interface Image {
  url: string,
  align: 'left' | 'right' | 'top'
}
export interface Layout {
  table?: TableLayout,
  basic?: BasicLayout,
  simple?: string,
  image?: Image,
  note?: string
}
export interface Section {
  name?: string,
  chil?: Layout[]
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