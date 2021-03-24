import * as f from 'f'

export default (name) =>
  f.compose(f.equal(name), f.prop('slot'))
