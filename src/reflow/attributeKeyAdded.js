import * as f from 'f'

export default ([attribute, vAttribute]) =>
  f.and(attribute, f.not(vAttribute))
