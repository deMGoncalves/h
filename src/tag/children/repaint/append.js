import * as f from 'f'
import { before } from 'hook'
import dom from '@/dom'

function append (other) {
  dom.query(this.target.id).append(other[f.magic('paint')]())
  return [other]
}

export default before(append)
