import * as f from 'f'

const render = (element, node) =>
  element.append(node[f.magic('paint')]())

export default f.curry(f.arity(2, f.frame(render)))
