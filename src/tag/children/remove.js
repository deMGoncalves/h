import * as f from 'f'

export default (list, child) =>
  f.splice(f.indexOf(list, child), 1)
