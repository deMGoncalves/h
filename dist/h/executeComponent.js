import slot from "../slot/index";
export default (functionRef, props, children) => functionRef(props, slot(children));
