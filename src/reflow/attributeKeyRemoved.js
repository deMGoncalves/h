import * as f from 'f'

export default ([attribute, vAttribute]) =>
  f.and(f.not(attribute), vAttribute)
