import * as f from 'f'
import hook from 'hook'

const magic = f.magic('render')
const render = (children) =>
  f.assign(children, {
    [magic]: (element) =>
      f.forEach(children.list, (child) => element.append(child[magic]()))
  })

export default hook(render)
