import * as f from 'f'

const replace = (children, current, other) =>
  children.replace(current, other)

export default f.curry(replace)
