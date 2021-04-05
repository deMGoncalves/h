import * as f from 'f'
import hook from 'hook'
import dom from '@/dom'

const paint = (comment) =>
  f.assign(comment, {
    [f.magic('paint')]: () =>
      dom.append(comment.id, document.createComment('#comment'))
  })

export default hook(paint)
