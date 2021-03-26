import * as f from 'f'
import nodeMapper from './nodeMapper'

const render = (element, rootElement) =>
  element.append(nodeMapper(rootElement))

export default f.curry(f.arity(2, f.frame(render)))
