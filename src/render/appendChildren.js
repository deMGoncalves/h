import * as f from 'f'
import nodeMapper from './nodeMapper'

const appendChildren = (descriptor, parent) =>
  f.always(parent)(parent.append(...f.map(descriptor.children, nodeMapper)))

export default f.curry(appendChildren)
