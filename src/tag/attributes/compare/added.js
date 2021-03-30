import * as f from 'f'

export default (current, other) =>
  f.and(f.not(current), other)
