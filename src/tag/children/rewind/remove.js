import * as f from 'f'

const remove = (children, current) =>
  children.remove(current)

export default f.curry(remove)
