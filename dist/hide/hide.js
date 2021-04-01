import h from "../h";
import Fragment from "../fragment/index";
export default (props, children) => props.if
    ? h(Fragment, null)
    : children;
