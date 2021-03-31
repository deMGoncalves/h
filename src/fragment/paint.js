import * as f from 'f'
import hook from 'hook'
import dom from '@/dom'

const magic = f.magic('paint')
const paint = (fragment) =>
  f.assign(fragment, {
    [magic]: () => {
      const element = document.createDocumentFragment()
      fragment.children[magic](element)

      return dom.append(fragment.id, element)
    }
  })

export default hook(paint)
