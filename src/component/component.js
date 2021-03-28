import * as f from 'f'

class Component {
  static is (tagNameOrComponent) {
    return f.is(Function, tagNameOrComponent)
  }
}

export default Component
