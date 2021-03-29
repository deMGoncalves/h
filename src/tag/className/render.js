import * as f from 'f'
import hook from 'hook'

const render = (className) =>
  f.assign(className, {
    [f.magic('render')]: (element) =>
      (className.value && (element.className = className.value))
  })

export default hook(render)
