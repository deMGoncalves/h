import * as f from 'f'
import * as d from '@/dunders'
import hasTarget from './hasTarget'

export default (node, vNode) =>
  f.and(f.and(hasTarget(node), hasTarget(vNode)), f.different(node[d.__klass__], vNode[d.__klass__]))
