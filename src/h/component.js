import slot from '@/slot'

class Component {
  static execute (componentRef, props, children) {
    return componentRef(props, slot(children))
  }
}

export default Component
