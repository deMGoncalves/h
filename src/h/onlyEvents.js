import * as f from 'f'

export default f.compose(f.test(/^on\S+$/), f.prop('[0]'))
