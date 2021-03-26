import * as f from 'f'
import mapper from '@/mapper'

const sethtmlfor = (node, [, [key, value]]) =>
  (mapper.get(node.__id__).setattribute('for', node.changeAttribute(key, value)))

export default f.curry(f.arity(2, f.frame(sethtmlfor)))
