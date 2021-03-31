import Fragment from '@/fragment'

export default (props, children) =>
  props.if
    ? children
    : Fragment
