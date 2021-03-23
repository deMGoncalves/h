import * as f from 'f';
import create from "./create";
const render = (node, rootNode) => node.append(create(rootNode));
export default f.curry(f.arity(2, f.frame(render)));
