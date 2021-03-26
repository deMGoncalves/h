import * as f from 'f'
import Component from './component'
import isComponent from './isComponent'
import isTagName from './isTagName'
import NodeElement from './nodeElement'

export default (tagNameOrComponent, props, ...children) =>
  f.cond(
    [isTagName, NodeElement.create],
    [isComponent, Component.execute]
  )(tagNameOrComponent, { ...props }, f.flatten(children))
