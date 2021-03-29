import * as f from 'f'
import hook from 'hook'

const magic = f.magic('render')
const render = (attributes) =>
  f.assign(attributes, {
    [magic]: (element) =>
      f.forEach(attributes.list, (attribute) =>
        element.setAttribute(attribute.key, attribute.value))
  })

export default hook(render)

