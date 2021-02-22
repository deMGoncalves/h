import extendAttributes from "../extendAttributes/index";
import getAttributes from "./getAttributes";
import getEventListeners from "./getEventListeners";
import removeEventListener from "./removeEventListener";
import removeAttributes from "./removeAttributes";
export default (node, vNode) => extendAttributes(Object.assign(Object.assign({}, getAttributes(vNode)), getEventListeners(vNode)), removeEventListener(removeAttributes(node)));
