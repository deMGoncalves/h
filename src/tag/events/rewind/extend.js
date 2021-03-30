import * as f from 'f'

const extend = (attributes, _current, other) =>
  attributes.setItem(other.name, other.listener)

export default f.curry(extend)
