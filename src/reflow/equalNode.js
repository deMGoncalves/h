import * as f from 'f'
import isNode from './isNode'

export default (node, vNode) =>
  f.and(
    isNode(node, vNode),
    f.equal(node.tagName, vNode.tagName)
  )
