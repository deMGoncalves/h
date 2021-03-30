import * as f from 'f'
import executeComponent from './executeComponent'

export default (componentRef, entity) =>
  new Proxy(
    (_props, children) =>
      executeComponent(componentRef, entity, children),
    {
      get: (_target, key) => f.is(Function, entity[key]) ? entity[key].bind(entity) : entity[key],
      set: (_target, key, value) => f.T(entity[key] = value)
    }
  )
