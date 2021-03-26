import * as f from 'f'
import executeComponent from './executeComponent'
import isComponent from './isComponent'
import isTagName from './isTagName'
import NodeElement from './nodeElement'

export default (tagNameOrComponent, props, ...children) =>
  f.cond(
    [isTagName, NodeElement.create],
    [isComponent, executeComponent]
  )(tagNameOrComponent, { ...props }, f.flatten(children))
