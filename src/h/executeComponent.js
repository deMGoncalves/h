import slot from '@/slot'

export default (functionRef, props, children) =>
  functionRef(props, slot(children))
