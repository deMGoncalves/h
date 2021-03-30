import * as f from 'f'
import { after } from 'hook'

const repaint = function (returned) {
  f.or(this[f.magic('reflow')], f.always())()
  return returned
}

export default after(repaint)
