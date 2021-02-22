import * as d from "../dunders/index";
import * as f from 'f';
export default (vNode) => []
    .slice
    .call(f.or(vNode[d.__events__], []))
    .reduce((reducer, event) => (Object.assign(Object.assign({}, reducer), { [event]: vNode[event] })), {});
