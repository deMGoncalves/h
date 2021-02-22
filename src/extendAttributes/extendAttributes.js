import * as f from 'f'
import mapAttribute from './mapAttribute'

const extendAttributes = (props, node) =>
  f.always(node)(f.forEach(f.toPairs(props), mapAttribute(node)))

export default f.curry(extendAttributes)
