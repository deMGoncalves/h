import * as f from 'f'

export default (node, vNode) =>
  f.and(
    f.has('children', node),
    f.has('children', vNode)
  )
