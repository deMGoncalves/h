import * as f from 'f'
import addEventListener from './addEventListener'

const addEventListeners = (descriptor, parent) =>
  f.always(parent)(f.forEach(descriptor.events, addEventListener(parent)))

export default f.curry(addEventListeners)
