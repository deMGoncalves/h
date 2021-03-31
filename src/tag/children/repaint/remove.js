import { before } from 'hook'
import dom from '@/dom'

function remove (child) {
  dom.query(child.id).remove()
  return [child]
}

export default before(remove)
