import * as f from 'f'
import { before } from 'hook'
import dom from '@/dom'

function replace (child, other) {
  dom.query(child.id).parentNode.replaceChild(other[f.magic('paint')](), dom.query(child.id))
  return [child, other]
}

export default before(replace)
