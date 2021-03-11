import * as f from 'f'

const render = (node, ...children) =>
  node.append(...children)

export default f.curry(f.arity(2, f.frame(render)))
