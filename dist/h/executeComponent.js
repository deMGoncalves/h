import slot from "../slot/index";
export default (functionRef, attributes, children) => functionRef(attributes, slot(children));
