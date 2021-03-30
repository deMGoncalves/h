import * as f from 'f'
import { before } from 'hook'
import dom from '@/dom'

const repaint = function (name, listener) {
  dom.query(this.target.id)[f.toLower(name)] = listener
  return [name, listener]
}

export default before(repaint)
