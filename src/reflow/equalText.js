import * as f from 'f'
import isText from './isText'

export default (node, vNode) =>
  f.and(
    isText(node, vNode),
    f.equal(node.textContent, vNode.textContent)
  )
