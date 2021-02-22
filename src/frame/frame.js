import * as f from 'f'

const frame = (target, ...args) =>
  window.requestAnimationFrame(() => target(...args))

export default f.curry(f.arity(2, frame))
