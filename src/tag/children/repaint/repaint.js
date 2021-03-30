import * as f from 'f'
import { before } from 'hook'
import added from './added'
import append from './append'
import remove from './remove'
import removed from './removed'
import replace from './replace'
import replaced from './replaced'

const repaint = function (child, other) {
  f.cond(
    [added, append],
    [removed, remove],
    [replaced, replace]
  )(this, child, other)

  return [child, other]
}

export default before(repaint)
