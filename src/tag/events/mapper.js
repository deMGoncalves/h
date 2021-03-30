import * as f from 'f'

export default (props) =>
  new Map(
    f.filter(
      f.entries(props),
      f.compose(f.test(/^on\S+$/i), f.prop('[0]'))
    )
  )
