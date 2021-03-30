import * as f from 'f'

export default (current, other) =>
  f.and(current, f.not(other))
