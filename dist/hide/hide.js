import h from "../h";
import Comment from "../comment/index";
export default (props, children) => props.if
    ? h(Comment, null)
    : children;
