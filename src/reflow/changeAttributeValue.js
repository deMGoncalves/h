import * as f from 'f'
import isAttribute from './isAttribute'
import isClassName from './isClassName'
import isHtmlFor from './isHtmlFor'
import setAttribute from './setAttribute'
import setClassName from './setClassName'
import setHtmlFor from './setHtmlFor'

const changeAttributeValue = (node, args) =>
  f.cond(
    [isClassName, setClassName(node)],
    [isHtmlFor, setHtmlFor(node)],
    [isAttribute, setAttribute(node)]
  )(args)

export default f.curry(changeAttributeValue)
