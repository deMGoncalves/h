import * as f from 'f'
import elementMapper from './elementMapper'

const render = (element, rootElement) =>
  element.append(elementMapper(rootElement))

export default f.curry(f.arity(2, f.frame(render)))
