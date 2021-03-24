import * as f from 'f'

export default f.compose(f.not, f.test(/^(on|slot)/), f.prop('[0]'))
