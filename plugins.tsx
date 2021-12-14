// ./plugins.tsx
import FillControl from './components/tina/FillControl'
import TypeControl from './components/tina/TypeControl'
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