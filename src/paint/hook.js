import * as f from 'f'

export default (entity) => (
  {
    get: (_, key) => f.is(Function, entity[key]) ? entity[key].bind(entity) : entity[key],
    set: (_, key, value) => f.T(entity[key] = value)
  }
)
