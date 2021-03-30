import * as f from 'f'

const restrict = (attributes, current, other = {}) =>
  attributes
    .removeKey(current.key)
    .setKey(other.key, other.value)

export default f.curry(restrict)
