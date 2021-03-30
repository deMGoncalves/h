import * as f from 'f'

const restrict = (attributes, current, other = {}) =>
  attributes
    .removeItem(current.key)
    .setItem(other.key, other.value)

export default f.curry(restrict)
