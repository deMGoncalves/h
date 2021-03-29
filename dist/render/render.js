import * as f from 'f';
const append = (element, vDom) => element.append(vDom.__append__());
export default f.frame(append);
