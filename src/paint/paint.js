import * as f from 'f'
import createComponent from './createComponent'
import createEntity from './createEntity'

export default (componentRef) =>
  (Entity) =>
    new Proxy(
      function (attributes, children) {
        return (this instanceof Entity)
          ? createEntity(componentRef, new Entity(...arguments))
          : createComponent(componentRef, new Entity({ ...attributes }), children)
      },
      {
        get: (_, key) => Entity[key],
        set: (_, key, value) => f.T(Entity[key] = value)
      }
    )
