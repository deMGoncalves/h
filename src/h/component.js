import * as f from 'f'
import slot from '@/slot'

class Component {
  static execute (componentRef, props, children) {
    return componentRef(props, slot(f.flatten(children)))
  }

  static is (tagNameOrComponent) {
    return f.is(Function, tagNameOrComponent)
  }
}

export default Component
