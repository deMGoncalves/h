import h from "../h/index";
import Fragment from "../fragment/index";
export default (props, children) => props.if ? children : h(Fragment, null);
