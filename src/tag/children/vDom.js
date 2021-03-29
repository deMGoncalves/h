import * as f from 'f'
import hook from 'hook'

const vDom = (children) =>
  f.assign(children, {
    __append__: () =>
      f.forEach(children.list, (child) =>
        children.parent.__element__.append(child.__append__()))
  })

export default hook(vDom)
