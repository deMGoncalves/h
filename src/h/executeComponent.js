import slot from '@/slot'

export default (componentRef, attributes, children) =>
  componentRef(attributes, slot(children))
