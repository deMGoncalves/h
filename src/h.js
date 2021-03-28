import * as f from 'f'
import Component from './component'
import Tag from './tag'

export default (tagNameOrComponent, props, ...children) =>
  f.cond(
    [Tag.is, Tag.create],
    [Component.is, Component.execute]
  )(tagNameOrComponent, { ...props }, f.flatten(children))
