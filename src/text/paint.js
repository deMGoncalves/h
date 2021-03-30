import * as f from 'f'
import hook from 'hook'
import dom from '@/dom'

const paint = (text) =>
  f.assign(text, {
    [f.magic('paint')]: () =>
      dom.append(text.id, document.createTextNode(text.content))
  })

export default hook(paint)
