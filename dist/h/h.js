import * as f from 'f';
import createNode from "./createNode";
import executeComponent from "./executeComponent";
import isComponent from "./isComponent";
import isTagName from "./isTagName";
export default (tagNameOrComponent, props, ...children) => f.cond([isTagName, createNode], [isComponent, executeComponent])(tagNameOrComponent, Object.assign({}, props), f.flatten(children));
