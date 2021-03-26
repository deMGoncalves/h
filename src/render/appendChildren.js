import * as f from 'f'
import elementMapper from './elementMapper'

const appendChildren = (descriptor, parent) =>
  f.always(parent)(parent.append(...f.map(descriptor.children, elementMapper)))

export default f.curry(appendChildren)
