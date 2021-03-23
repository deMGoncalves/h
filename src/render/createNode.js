import * as f from 'f'
import addEventListeners from './addEventListeners'
import appendChildren from './appendChildren'
import createElement from './createElement'
import setAttributes from './setAttributes'

export default (descriptor) =>
  f.compose(appendChildren(descriptor), addEventListeners(descriptor), setAttributes(descriptor))(createElement(descriptor))
