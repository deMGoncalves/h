import * as f from 'f'

export default (props) =>
  new Map(
    f.filter(
      f.entries(props),
      f.compose(f.not, f.test(/^(className|is|slot|on\S+)$/i), f.prop('[0]'))
    )
  )
