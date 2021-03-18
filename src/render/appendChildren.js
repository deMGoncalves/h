import * as f from 'f'
import create from './create'

const appendChildren = (descriptor, parent) =>
  f.always(parent)(parent.append(...f.map(descriptor.children, create)))

export default f.curry(appendChildren)
