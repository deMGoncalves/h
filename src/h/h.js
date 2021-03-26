import * as f from 'f'
import Component from './component'
import NodeElement from './nodeElement'

export default (tagNameOrComponent, props, ...children) =>
  f.cond(
    [NodeElement.is, NodeElement.create],
    [Component.is, Component.execute]
  )(tagNameOrComponent, { ...props }, f.flatten(children))
