import * as f from 'f'
import hook from 'hook'
import append from './append'

const vDom = (node) =>
  f.assign(node, {
    '__append__': append(node)
  })

export default hook(vDom)
