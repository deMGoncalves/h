import * as f from 'f'
import added from './added'

export default (children, child) =>
  f.not(added(children, child))
