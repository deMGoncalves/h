import * as f from 'f'
import hook from 'hook'

const paint = (className) =>
  f.assign(className, {
    [f.magic('paint')]: (element) =>
      (className.value && (element.className = className.value))
  })

export default hook(paint)
