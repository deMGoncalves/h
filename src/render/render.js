import * as f from 'f'
import nodeMapper from './nodeMapper'

const render = (node, rootNode) =>
  node.append(nodeMapper(rootNode))

export default f.curry(f.arity(2, f.frame(render)))
