import * as f from 'f'
import hook from 'hook'

const vDom = (text) =>
  f.assign(text, {
    __append__: () =>
      document.createTextNode(text.content)
  })

export default hook(vDom)
