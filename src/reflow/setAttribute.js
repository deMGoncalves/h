import * as f from 'f'
import mapper from '@/mapper'

const setAttribute = (node, [, [key, value]]) =>
  (mapper.get(node.__id__).setAttribute(key, node.changeAttribute(key, value)))

export default f.curry(f.arity(2, f.frame(setAttribute)))
