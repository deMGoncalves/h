import * as f from 'f'
import addEventListener from './addEventListener'
import isAttribute from './isAttribute'
import isClassName from './isClassName'
import isEvent from './isEvent'
import setAttribute from './setAttribute'
import setClassName from './setClassName'

export default f.cond(
  [isAttribute, setAttribute],
  [isClassName, setClassName],
  [isEvent, addEventListener]
)
