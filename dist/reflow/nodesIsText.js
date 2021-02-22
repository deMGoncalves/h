import * as f from 'f';
export default (node, vNode) => f.and(f.equal(node.nodeType, 3), f.equal(vNode.nodeType, 3));
