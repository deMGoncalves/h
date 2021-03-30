import * as f from 'f'

export default (entity) =>
  new Proxy(
    entity,
    {
      get: (target, key) => f.is(Function, target[key]) ? target[key].bind(target) : target[key],
      set: (target, key, value) => f.T(target[key] = value)
    }
  )
