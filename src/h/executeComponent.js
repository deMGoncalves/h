import slot from '@/slot'

export default (componentRef, props, children) =>
  componentRef(props, slot(children))
