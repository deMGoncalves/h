import * as f from 'f'
import { before } from 'hook'
import dom from '@/dom'

const append = function (other) {
  dom.query(this.last.id).insertAdjacentElement('afterend', other[f.magic('paint')]())
}

export default before(append)
