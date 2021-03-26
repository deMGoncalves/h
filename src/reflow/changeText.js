import * as f from 'f'
import mapper from '@/mapper'

const changeText = (node, vNode) =>
  (mapper.get(node.__id__).textContent = node.changeTextContent(vNode.textContent))

export default f.frame(changeText)
