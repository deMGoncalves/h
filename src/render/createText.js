import mapper from '@/mapper'

export default (descriptor) =>
  mapper.set(
    descriptor.__id__,
    document.createTextNode(descriptor.textContent)
  )
