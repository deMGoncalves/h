import * as f from 'f'
import nodeMapper from './nodeMapper'

const render = (node, vNode) =>
  node.append(nodeMapper(vNode))

export default f.curry(f.arity(2, f.frame(render)))
