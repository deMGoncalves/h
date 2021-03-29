import * as f from 'f';
const render = (element, node) => element.append(node[f.magic('render')]());
export default f.frame(render);
