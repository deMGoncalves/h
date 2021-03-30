import * as f from 'f'

export default (list, child, other) =>
  f.splice(f.indexOf(list, child), 1, other)
