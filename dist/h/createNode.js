import * as f from 'f';
import extendAttributes from "../extendAttributes/index";
import appendChildren from "./appendChildren";
export default (tagName, props, children) => f.compose(appendChildren(children), extendAttributes(props))(document.createElement(tagName, { is: props.is }));
