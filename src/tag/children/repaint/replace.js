import * as f from 'f'
import { before } from 'hook'
import dom from '@/dom'

function replace (child, other) {
  console.log(child, other)
  const element = f.is(Function, other)
    ? other()
    : other[f.magic('paint')]()

  dom.query(child.id).parentNode.replaceChild(element, dom.query(child.id))
  return [child, other]
}

export default before(replace)
