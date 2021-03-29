import * as f from 'f'
import executeComponent from './executeComponent'
import traps from './traps'

export default (componentRef, entity) =>
  traps(
    (_props, children) =>
      executeComponent(componentRef, entity, children),
    entity
  )
