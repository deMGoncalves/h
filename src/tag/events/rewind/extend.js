import * as f from 'f'

const extend = (events, _current, other) =>
  events.setItem(other.name, other.listener)

export default f.curry(extend)
