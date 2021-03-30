import * as f from 'f'

export default (current, other) =>
  f.forEach(
    ['attributes', 'children', 'className', 'events'],
    (attribute) =>
      current[attribute].reflow(other[attribute])
  )
