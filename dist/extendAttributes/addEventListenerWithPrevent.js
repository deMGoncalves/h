import * as f from 'f';
import addEventListener from "./addEventListener";
import preventDefault from "./preventDefault";
export default (node) => (name, listener) => addEventListener(node, f.slice(name, 0, -8), preventDefault(f.idle(listener)));
