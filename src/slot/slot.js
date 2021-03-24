import * as f from 'f'

export default (children) =>
  new Proxy(
    f.filter(children, f.compose(f.not, f.prop('slot'))),
    {
      get: (target, name) =>
        f.or(target[name], f.filter(children, f.compose(f.equal(name), f.prop('slot'))))
    }
  )
