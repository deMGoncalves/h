import * as f from 'f';
export default (node, vNode) => f.different(node.tagName, vNode.tagName);
