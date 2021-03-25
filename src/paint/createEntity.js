import createComponent from './createComponent'
import hook from './hook'

export default (componentRef, entity) =>
  new Proxy(
    (_, children) => createComponent(componentRef, entity, children),
    hook(entity)
  )
