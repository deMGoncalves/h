import h from "../h/index";
import Fragment from "../fragment/index";
export default (props, children) => props.if ? h(Fragment, null) : children;
