import h from '@/h'
import Comment from '@/comment'

export default (props, children) =>
  props.if
    ? <Comment />
    : children
