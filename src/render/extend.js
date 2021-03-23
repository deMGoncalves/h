import * as f from 'f'
import isAttribute from './isAttribute'
import isClassName from './isClassName'
import isForHtml from './isForHtml'
import setAttribute from './setAttribute'
import setClassName from './setClassName'
import setForHtml from './setForHtml'

export default f.cond(
  [isClassName, setClassName],
  [isForHtml, setForHtml],
  [isAttribute, setAttribute]
)
