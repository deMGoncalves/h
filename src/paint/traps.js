import * as f from 'f'

export default (entity) =>
  new Proxy(
    {},
    {
      get: (_target, key) => f.is(Function, entity[key]) ? entity[key].bind(entity) : entity[key],
      set: (_target, key, value) => f.T(entity[key] = value)
    }
  )
