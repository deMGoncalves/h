import * as f from 'f'

export default f.compose(f.test(/^on/), f.prop('[0]'))
