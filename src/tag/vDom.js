import * as f from 'f'
import hook from 'hook'

const vDom = (tag) =>
  f.assign(tag, {
    __append__: () =>
      document.createElement(tag.tagName, { is: tag.is })
  })

export default hook(vDom)
