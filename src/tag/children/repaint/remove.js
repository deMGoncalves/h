import { before } from 'hook'
import dom from '@/dom'

function remove (current) {
  dom.query(current.id).remove()
  return [current]
}

export default before(remove)
