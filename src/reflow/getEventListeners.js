import * as d from '@/dunders'
import * as f from 'f'

export default (vNode) =>
  []
    .slice
    .call(f.or(vNode[d.__events__], []))
    .reduce((reducer, event) =>
      ({ ...reducer, [event]: vNode[event] }), {})
