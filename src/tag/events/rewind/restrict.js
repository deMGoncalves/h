import * as f from 'f'

const restrict = (attributes, current, other = {}) =>
  attributes
    .removeItem(current.name)
    .setItem(other.name, other.listener)

export default f.curry(restrict)
