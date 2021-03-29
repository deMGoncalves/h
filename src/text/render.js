import * as f from 'f'
import hook from 'hook'

const render = (text) =>
  f.assign(text, {
    [f.magic('render')]: () =>
      document.createTextNode(text.content)
  })

export default hook(render)
