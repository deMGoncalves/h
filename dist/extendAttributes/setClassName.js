import * as f from 'f';
const setClassName = (node) => (_, className) => (node.className = f.join(f.flatten(f.concat([], className)), ' '));
export default setClassName;
