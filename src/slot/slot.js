import * as f from 'f'

export default (children) =>
  new Proxy(children, {
    get: (target, name) =>
      f.or(target[name], f.filter(target, (child) => f.equal(name, f.prop('slot', child))))
  })
