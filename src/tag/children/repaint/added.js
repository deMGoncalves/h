import * as f from 'f'

export default (children, child) =>
  f.test(/-1/, f.indexOf(children.list, child))
