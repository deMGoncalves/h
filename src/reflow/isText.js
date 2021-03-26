import * as f from 'f'

export default (node, vNode) =>
  f.and(
    f.has('textContent', node),
    f.has('textContent', vNode)
  )
