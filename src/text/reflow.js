import * as f from 'f'
import hook from 'hook'

const reflow = (text) =>
  f.assign(text, {
    [f.magic('reflow')]: (newText) =>
      f.different(text.content, newText.content) && text.changeContent(newText.content)
  })

export default hook(reflow)

