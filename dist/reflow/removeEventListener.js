import * as d from "../dunders/index";
import * as f from 'f';
export default (node) => f.always(node)(f.forEach(f.or(node[d.__events__], []), (event) => (node[event] = undefined)));
