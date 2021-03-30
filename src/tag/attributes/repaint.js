import * as f from 'f'
import { before } from 'hook'
import dom from '@/dom'

const repaint = function (key, value) {
  dom.query(this.parent.id)[value ? 'setAttribute' : 'removeAttribute'](key, value)
  return [key, value]
}

export default before(f.frame(repaint))
