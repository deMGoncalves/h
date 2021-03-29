import * as f from 'f'
import hook from 'hook'

const vDom = (tag) =>
  f.assign(tag, {
    __element__: document.createElement(tag.tagName, { is: tag.is }),

    __append__: () => {
      tag.children.__append__()
      return tag.__element__
    }
  })

export default hook(vDom)
