import { before } from 'hook'
import dom from '@/dom'

const remove = (child) =>
  dom.query(child.id).remove()

export default before(remove)
