import * as f from 'f'
import createText from './createText'

export default (children) =>
  f.map(children, (child) =>
    f.or(f.is(String, child), f.is(Number, child))
      ? createText(child)
      : child
  )
