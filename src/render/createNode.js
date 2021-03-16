import * as f from 'f'
import appendChildren from './appendChildren'
import createElement from './createElement'

export default (descriptor) =>
  appendChildren(createElement(descriptor), descriptor)
