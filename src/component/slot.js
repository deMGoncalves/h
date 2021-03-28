import * as f from 'f'

export default (children) =>
  new Proxy(
    f.filter(children, f.has('slot')),
    {
      get: (target, slotName) =>
        f.or(target[slotName], f.filter(children, f.compose(f.equal(slotName), f.prop('slot'))))
    }
  )
