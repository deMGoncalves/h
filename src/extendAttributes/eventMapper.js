import * as d from '@/dunders'
import * as f from 'f'

export default (node, name) =>
  f.always(name)(node[d.__events__] = f.concat(f.or(node[d.__events__], []), name))
