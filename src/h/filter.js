import * as f from 'f'

export default (attributes, predicate) =>
  f.filter(f.toPairs(attributes), predicate)
