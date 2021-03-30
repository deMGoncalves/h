import * as f from 'f'
import hook from 'hook'

const magic = f.magic('paint')
const paint = (children) =>
  f.assign(children, {
    [magic]: (element) =>
      f.forEach(children.list, (child) => element.append(child[magic]()))
  })

export default hook(paint)
