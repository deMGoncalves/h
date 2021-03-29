import * as f from 'f'
import hook from 'hook'

const magic = f.magic('render')
const render = (tag) =>
  f.assign(tag, {
    [magic]: () => {
      const element = document.createElement(tag.tagName, { is: tag.is })

      tag.attributes[magic](element)
      tag.children[magic](element)
      tag.className[magic](element)
      tag.events[magic](element)

      return element
    }
  })

export default hook(render)
