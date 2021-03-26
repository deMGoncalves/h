import * as f from 'f'

export default ([[key, value], [vKey, vValue]]) =>
  f.and(
    f.equal(key, vKey),
    f.equal(value, vValue)
  )
