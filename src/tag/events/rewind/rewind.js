import * as f from 'f'
import added from './added'
import changed from './changed'
import different from './different'
import extend from './extend'
import removed from './removed'
import restrict from './restrict'

export default (current, other) =>
  f.forEach(
    f.zip(current.list, other.list),
    f.apply(f.cond(
      [added, extend(current)],
      [removed, restrict(current)],
      [changed, extend(current)],
      [different, restrict(current)]
    ))
  )
