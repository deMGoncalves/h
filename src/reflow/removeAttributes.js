import * as d from '@/dunders'
import * as f from 'f'

export default (node) =>
  f.always(node)(
    f.forEach(f.or(node[d.__attributes__], []), (key) =>
      node.removeAttribute(key)))
