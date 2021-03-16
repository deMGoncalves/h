import * as f from 'f'
import create from './create'

const render = (node, parent) =>
  node.append(create(parent))

export default f.curry(f.arity(2, f.frame(render)))
