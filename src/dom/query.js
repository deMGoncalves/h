import * as f from 'f'
import map from './map'

export default (id) =>
  f.or(map.get(id), {})
