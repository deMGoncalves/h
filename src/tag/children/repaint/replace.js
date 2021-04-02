import * as f from 'f'
import { before } from 'hook'
import dom from '@/dom'

function replace (current, other) {
  dom.query(this.target.id).replaceChild(other[f.magic('paint')], dom.query(current.id))
  return [current, other]
}

export default before(replace)
