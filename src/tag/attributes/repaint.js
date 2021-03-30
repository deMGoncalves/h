import { before } from 'hook'
import dom from '@/dom'

const repaint = function (key, value) {
  dom.query(this.target.id)[value ? 'setAttribute' : 'removeAttribute'](key, value)
  return [key, value]
}

export default before(repaint)
