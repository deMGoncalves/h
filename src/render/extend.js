import * as f from 'f'
import isAttribute from './isAttribute'
import isClassName from './isClassName'
import isHtmlFor from './isHtmlFor'
import setAttribute from './setAttribute'
import setClassName from './setClassName'
import setHtmlFor from './setHtmlFor'

export default f.cond(
  [isClassName, setClassName],
  [isHtmlFor, setHtmlFor],
  [isAttribute, setAttribute]
)
