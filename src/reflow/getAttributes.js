import * as f from 'f'

export default (vNode) =>
  []
    .slice
    .call(f.or(vNode.attributes, []))
    .reduce((reducer, { name, value }) =>
      ({ ...reducer, [name]: value }), {})
