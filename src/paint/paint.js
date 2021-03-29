import * as f from 'f'

const paint = (componentRef) =>
  (Entity) =>
    new Proxy(
      function (props, children) {
        return (this instanceof Entity)
          ? new Entity(...arguments)
          : componentRef(new Entity(props), children)
      },
      {
        get: (_target, key) => Entity[key],
        set: (_target, key, value) => f.T(Entity[key] = value)
      }
    )

export default paint
