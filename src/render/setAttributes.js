import * as f from 'f'
import extend from './extend'

const setAttibutes = (descriptor, parent) =>
  f.always(parent)(f.forEach(f.toPairs(descriptor.attributes), (args) => extend(...args)))

export default f.curry(setAttibutes)
