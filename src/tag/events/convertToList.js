import * as f from 'f'

export default (map) =>
  f.map([...map], ([name, listener]) => ({ name, listener }))
