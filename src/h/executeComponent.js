import slot from '@/slot'

export default (functionRef, attributes, children) =>
  functionRef(attributes, slot(children))
