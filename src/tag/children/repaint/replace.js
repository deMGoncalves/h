import * as f from 'f'
import dom from '@/dom'

export default (children, child, other) =>
  dom.query(children.target.id).replaceChild(other[f.magic('paint')](), dom.query(child.id))
