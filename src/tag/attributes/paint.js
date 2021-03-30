import * as f from 'f'
import hook from 'hook'

const paint = (attributes) =>
  f.assign(attributes, {
    [f.magic('paint')]: (element) =>
      f.forEach(attributes.list, ({ key, value }) => element.setAttribute(key, value))
  })

export default hook(paint)
