interface TableLayout {
  th: string[],
  td: any[]
}

interface BasicLayout {
  name: string,
  value: string
}

interface Image {
  url: string,
  align: 'left' | 'right' | 'top'
}

interface Layout {
  table?: TableLayout,
  basic?: BasicLayout,
  simple?: string,
  image?: Image,
  notes?: string
}

interface Section {
  name: string,
  chil: Layout[]
}

interface Cv {
  name: string,
  color: string,
  mode: boolean,
  pin: number | null,
  section?: Section[]
}

interface Action {
  type: string,
  payload?: any
}

const initCv: Cv = {
  name: 'Untited',
  color: '#5CF2E3',
  mode: false,
  pin: null
}

const Reducer = (cv: Cv = initCv, action: Action) => {
  switch(action.type) {
    case 'CREATE':
      return cv
    case 'SET_COLOR':
      return {...cv, color: action.payload.color}
    case 'RENAME':
      return {...cv, name: action.payload.name}
    case 'CHANGE_MODE':
      return {...cv, mode: action.payload.mode}
    default:
      return cv
  }
}

export default Reducer;