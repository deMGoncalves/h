import * as f from 'f'

const setAttibutes = (descriptor, parent) =>
  f.always(parent)(f.forEach(f.toPairs(descriptor.attributes), (args) =>
    parent.setAttribute(...args)))

export default f.curry(setAttibutes)
