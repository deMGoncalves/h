import * as f from 'f'

const append = (children, _current, other) =>
  children.append(other)

export default f.curry(append)
