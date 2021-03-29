import * as f from 'f'
import hook from 'hook'

const magic = f.magic('reflow')
const reflow = (text) =>
  f.assign(text, {
    [magic]: (newText) => {
      f.different(text.content, newText.content) && text.changeContent(newText.content)
    }
  })

export default hook(reflow)

