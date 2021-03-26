import * as f from 'f'
import mapper from '@/mapper'
import addEventListeners from './addEventListeners'
import appendChildren from './appendChildren'
import createElement from './createElement'
import setAttributes from './setAttributes'

export default (descriptor) =>
  mapper.set(
    descriptor.__id__,
    f.compose(appendChildren(descriptor), addEventListeners(descriptor), setAttributes(descriptor))(createElement(descriptor))
  )
