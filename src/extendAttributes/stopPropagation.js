import * as f from 'f'

export default (listener) =>
  (e) =>
    listener(f.always(e)(e.stopPropagation()))
