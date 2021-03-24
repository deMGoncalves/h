import * as f from 'f'

export default (props, predicate) =>
  f.filter(f.toPairs(props), predicate)
