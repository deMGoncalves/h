import h from '@/h'
import Fragment from '@/fragment'

export default (props, children) => (
  console.log(props, children),
  props.if
    ? children
    : <Fragment />
)
