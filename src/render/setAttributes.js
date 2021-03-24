import * as f from 'f'
import attributesMapper from './attributesMapper'

const setAttibutes = (descriptor, parent) =>
  f.always(parent)(f.forEach(descriptor.attributes, attributesMapper(parent)))

export default f.curry(setAttibutes)
