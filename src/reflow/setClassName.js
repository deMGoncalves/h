import * as f from 'f'
import mapper from '@/mapper'

const setClassName = (node, [, [key, value]]) =>
  (mapper.get(node.__id__).className = node.changeAttribute(key, value))

export default f.curry(f.arity(2, f.frame(setClassName)))
