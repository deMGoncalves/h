import * as f from 'f'
import hook from 'hook'
import dom from '@/dom'

const render = (text) =>
  f.assign(text, {
    [f.magic('render')]: () =>
      dom.append(text.id, document.createTextNode(text.content))
  })

export default hook(render)
