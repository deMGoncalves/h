import * as f from 'f'
import create from './create'

export default (parent, descriptor) =>
  f.always(parent)(parent.append(...f.map(descriptor.children, create)))
