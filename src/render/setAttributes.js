import * as f from 'f'
import extend from './extend'

const setAttibutes = (descriptor, parent) =>
  f.always(parent)(f.forEach(descriptor.attributes, (args) => extend(...args, parent)))

export default f.curry(setAttibutes)
