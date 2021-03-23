import * as f from 'f'

const addEventListener = (parent, [key, value]) =>
  (parent[f.toLower(key)] = value)

export default f.curry(addEventListener)
