import * as f from 'f'
import hook from 'hook'

const magic = f.magic('reflow')
const reflow = (tag) =>
  f.assign(tag, {
    [magic]: (newTag) => {
      tag.attributes[magic](newTag.attributes)
      tag.children[magic](newTag.children)
    }
  })

export default hook(reflow)

