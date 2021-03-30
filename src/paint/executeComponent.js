import * as f from 'f'
import traps from './traps'

export default function (componentRef, entity, children) {
  const props = traps({}, entity)
  const element = componentRef(props, children)

  f.assign(entity, {
    [f.magic('reflow')]: () =>
      element.reflow(componentRef(props, children))
  })

  return element
}
