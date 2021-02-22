import * as f from 'f'
import * as d from '@/dunders'

const replaceComponent = (node, vNode, parent) =>
  parent.replaceChild(vNode[d.__klass__][d.__element__], node)

export default f.frame(replaceComponent)
