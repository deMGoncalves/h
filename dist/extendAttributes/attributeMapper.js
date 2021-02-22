import * as d from "../dunders/index";
import * as f from 'f';
export default (node, key) => f.always(key)(node[d.__attributes__] = f.concat(f.or(node[d.__attributes__], []), key));
