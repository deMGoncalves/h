import * as f from 'f'

export default function (componentRef, entity, children) {
  const element = componentRef(entity, children)

  f.assign(entity, {
    [f.magic('reflow')]: f.frame(() =>
      element.reflow(componentRef(entity, children)))
  })

  return element
}
