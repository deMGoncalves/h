import * as f from 'f';
const appendChild = (_, vNode, parent) => parent.appendChild(vNode);
export default f.frame(appendChild);
