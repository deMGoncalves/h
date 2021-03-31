import * as f from 'f'

export default (tag) =>
  f.not(f.test(/^\w+-/, tag.name))
