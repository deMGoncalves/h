import * as f from 'f'
import map from './map'

export default (id, node) =>
  f.always(node)(map.set(id, node))
