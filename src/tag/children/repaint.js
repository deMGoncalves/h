import * as f from 'f'
import { before } from 'hook'
import dom from '@/dom'

const repaint = function (current, other) {
  switch (f.len(arguments)) {
    case 1:
      f.test(/-1/, f.indexOf(this.list, current))
        ? dom.query(this.target.id).append(current[f.magic('paint')]())
        : dom.query(current.id).remove()
      break;
    default:
      dom.query(this.target.id).replaceChild(other[f.magic('paint')](), dom.query(current.id))
      break;
  }

  return [current, other]
}

export default before(repaint)
