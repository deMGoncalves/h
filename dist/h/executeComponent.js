import slot from "../slot/index";
export default (componentRef, attributes, children) => componentRef(attributes, slot(children));
