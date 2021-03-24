import * as f from 'f'
import isAttribute from './isAttribute'
import isClassName from './isClassName'
import isHtmlFor from './isHtmlFor'
import setAttribute from './setAttribute'
import setClassName from './setClassName'
import setHtmlFor from './setHtmlFor'

const attributeMapper = (parent, args) =>
  f.cond(
    [isClassName, setClassName],
    [isHtmlFor, setHtmlFor],
    [isAttribute, setAttribute]
  )(...args, parent)

export default f.curry(attributeMapper)
