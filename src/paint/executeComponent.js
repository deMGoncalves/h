import * as f from 'f'
import traps from './traps'

export default function (componentRef, entity, children) {
  const element = componentRef(traps(entity), children)

  f.assign(entity, {
    [f.magic('element')]: element,
    [f.magic('repaint')]: () => element[f.magic('repaint')]()
  })

  return element
}
