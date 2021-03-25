import * as f from 'f';
export default f.map(f.__, (textNode) => [...new DOMParser().parseFromString(textNode, 'text/html').body.childNodes]);
