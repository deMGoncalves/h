import dom from '@/dom'

export default (_children, child) =>
  dom.query(child.id).remove()
