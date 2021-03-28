import * as f from 'f'

class Component {
  static execute (componentRef, props, children) {
    return componentRef(props, slot(children)) 
  }

  static is (tagNameOrComponent) {
    return f.is(Function, tagNameOrComponent)
  }
}

export default Component
