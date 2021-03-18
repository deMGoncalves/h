import * as f from 'f'
import appendChildren from './appendChildren'
import createElement from './createElement'
import setAttributes from './setAttributes'

export default (descriptor) =>
  f.compose(appendChildren(descriptor), setAttributes(descriptor))(createElement(descriptor))
