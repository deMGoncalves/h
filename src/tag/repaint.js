import * as f from 'f'
import hook from 'hook'

const reflow = (tag) =>
  f.assign(tag, {
    [f.magic('reflow')]: (newTag) => {
      console.log('reflow', tag, newTag)
    }
  })

export default hook(reflow)

