import * as f from 'f'
import isNode from './isNode'

export default (node, vNode) =>
  f.and(
    isNode(node, vNode),
    f.different(node.tagName, vNode.tagName)
  )
