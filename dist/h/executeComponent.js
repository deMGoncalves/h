import slot from "../slot/index";
export default (component, props, children) => component(props, slot(children));
