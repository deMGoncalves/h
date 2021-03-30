import * as f from 'f'

export default (current, other) =>
  f.different(current.name, other.name)
