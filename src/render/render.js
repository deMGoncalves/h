import * as f from 'f'
import create from './create'

const render = (node, root) =>
  node.append(create(root))

export default f.curry(f.arity(2, f.frame(render)))
