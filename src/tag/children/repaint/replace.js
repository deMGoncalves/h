import * as f from 'f'
import { before } from 'hook'
import dom from '@/dom'

const replace = (child, other) =>
  dom.query(child.id).parentNode.replaceChild(other[f.magic('paint')](), dom.query(child.id))

export default before(replace)
