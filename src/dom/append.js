import * as f from 'f'
import map from './map'

export default (id, tagOrText) =>
  f.always(tagOrText)(map.set(id, tagOrText))
