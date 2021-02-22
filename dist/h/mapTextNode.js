import * as f from 'f';
import isTextNode from "./isTextNode";
export default f.map(f.__, (nodeOrText) => isTextNode(nodeOrText) ? document.createTextNode(nodeOrText) : nodeOrText);
