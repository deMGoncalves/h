import * as f from 'f'

export default (map) =>
  f.map([...map], ([key, value]) => ({ key, value }))
