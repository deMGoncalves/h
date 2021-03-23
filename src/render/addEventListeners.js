import * as f from 'f'

const addEventListeners = (descriptor, parent) =>
  f.always(parent)()

export default f.curry(addEventListeners)
