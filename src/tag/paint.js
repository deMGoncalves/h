import * as f from 'f'
import hook from 'hook'

const magic = f.magic('paint')
const paint = (tag) =>
  f.assign(tag, {
    [magic]: () => {
      const element = document.createElement(tag.name, { is: tag.is })

      tag.attributes[magic](element)
      tag.children[magic](element)
      tag.className[magic](element)
      tag.events[magic](element)

      return element
    }
  })

export default hook(paint)