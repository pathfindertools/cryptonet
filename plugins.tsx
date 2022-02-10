// ./plugins.tsx
import AlignmentControl from './components/tina/AlignmentControl'
import FillControl from './components/tina/FillControl'
import TypeControl from './components/tina/TypeControl'
import ImageControl from './components/tina/ImageControl'
import PaddingControl from './components/tina/PaddingControl'
import BorderControl from './components/tina/BorderControl'
import SelectField from './components/tina/SelectField'
import RuledTitle from './components/tina/RuledTitle'
import { TextField } from 'tinacms'

export const emailFieldPlugin = {
  Component: TextField,
  __type: 'field',
  name: 'text-email',
  validate: (email, allValues, meta, field) => {
    let isValidEmail = /.*@.*\..*/.test(email)
    if (!isValidEmail) return 'Invalid email address'
  },
}

export const selectFieldPlugin = {
  Component: SelectField,
  __type: 'field',
  name: 'selectField',
}

export const alignmentControlFieldPlugin = {
  Component: AlignmentControl,
  __type: 'field',
  name: 'alignmentControl',
}

export const typeControlFieldPlugin = {
    Component: TypeControl,
    __type: 'field',
    name: 'typeControl',
  }

export const fillControlFieldPlugin = {
  Component: FillControl,
  __type: 'field',
  name: 'fillControl',
}

export const imageControlFieldPlugin = {
  Component: ImageControl,
  __type: 'field',
  name: 'imageControl',
}

export const paddingControlFieldPlugin = {
  Component: PaddingControl,
  __type: 'field',
  name: 'paddingControl',
}

export const borderControlFieldPlugin = {
  Component: BorderControl,
  __type: 'field',
  name: 'borderControl',
}

export const ruledTitlePlugin = {
  Component: RuledTitle,
  __type: 'field',
  name: 'ruledTitle',
}