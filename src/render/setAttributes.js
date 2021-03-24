import * as f from 'f'
import attributeMapper from './attributeMapper'

const setAttibutes = (descriptor, parent) =>
  f.always(parent)(f.forEach(descriptor.attributes, attributeMapper(parent)))

export default f.curry(setAttibutes)
