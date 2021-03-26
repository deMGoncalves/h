import * as f from 'f'
import isText from './isText'

export default (node, vNode) =>
  f.and(
    isText(node, vNode),
    f.different(node.textContent, vNode.textContent)
  )

