import * as f from 'f'
import hook from 'hook'

const render = (className) =>
  f.assign(className, {
    [f.magic('render')]: (element) =>
      (element.className = className.value)
  })

export default hook(render)
