import * as f from 'f'
import createNode from './createNode'
import createText from './createText'

export default f.cond(
  [f.is(Object), createNode],
  [f.is(String), createText]
)
