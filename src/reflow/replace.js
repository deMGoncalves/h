import * as f from 'f'
import mapper from '@/mapper'
import nodeMapper from '@/render/nodeMapper'

const replace = (node, vNode) => (
  mapper
    .get(node.__id__)
    .insertAdjacentElement('beforebegin', nodeMapper(vNode)),

  mapper.delete(node.__id__)
)

export default f.frame(replace)
