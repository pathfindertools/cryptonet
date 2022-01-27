// ./plugins.tsx
import FillControl from './components/tina/FillControl'
import TypeControl from './components/tina/TypeControl'
import ImageControl from './components/tina/ImageControl'
import PaddingControl from './components/tina/PaddingControl'
import BorderControl from './components/tina/BorderControl'
import { TextField } from 'tinacms'

export const emailFieldPlugin = {
  Component: TextField, // Extend the built-in text field
  __type: 'field',
  name: 'text-email',
  validate: (email, allValues, meta, field) => {
    let isValidEmail = /.*@.*\..*/.test(email)
    if (!isValidEmail) return 'Invalid email address'
  },
}

export const typeControlFieldPlugin = {
    Component: TypeControl, // Extend the built-in text field
    __type: 'field',
    name: 'typeControl',
  }

export const fillControlFieldPlugin = {
  Component: FillControl, // Extend the built-in text field
  __type: 'field',
  name: 'fillControl',
}

export const imageControlFieldPlugin = {
  Component: ImageControl, // Extend the built-in text field
  __type: 'field',
  name: 'imageControl',
}

export const paddingControlFieldPlugin = {
  Component: PaddingControl, // Extend the built-in text field
  __type: 'field',
  name: 'paddingControl',
}

export const borderControlFieldPlugin = {
  Component: BorderControl, // Extend the built-in text field
  __type: 'field',
  name: 'borderControl',
}