import * as f from 'f'

const extend = (attributes, _current, other) =>
  attributes.setKey(other.key, other.value)

export default f.curry(extend)
