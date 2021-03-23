import * as f from 'f';
import appendChildren from '@/h/appendChildren';
import extendAttributes from "./extendAttributes";
export default (props, children) => appendChildren(f.flatten(children), extendAttributes(props, document.createDocumentFragment()));
