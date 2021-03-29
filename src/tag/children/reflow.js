import * as f from 'f'
import hook from 'hook'

const magic = f.magic('reflow')
const reflow = (children) =>
  f.assign(children, {
    [magic]: (newChildren) => {
      f.forEach(
        f.zip(children.list, newChildren.list),
        ([tag, newTag]) => tag[magic](newTag)
      )
    }
  })

export default hook(reflow)
