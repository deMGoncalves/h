import * as f from 'f'

export default f.compose(f.not, f.test(/^(on\S+|is|slot)$/), f.prop('[0]'))
