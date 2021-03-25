import * as f from 'f'
import reflow from '@/reflow'
import executeComponent from './executeComponent'

export default function (componentRef, entity, children) {
  f.assign(entity, {
    ['__rootNode__']: executeComponent(componentRef, entity, children),
    ['__reflow__']: f.idle(() => reflow(entity['__rootNode__'], componentRef(entity, children)))
  })

  return entity['__rootNode__']
}
