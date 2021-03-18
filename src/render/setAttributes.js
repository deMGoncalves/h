import * as f from 'f'

const setAttibutes = (descriptor, parent) =>
  f.always(parent)(f.forEach(f.toPairs(descriptor.attributes), ([key, value]) =>
    parent.setAttribute(key, value)))

export default f.curry(setAttibutes)
