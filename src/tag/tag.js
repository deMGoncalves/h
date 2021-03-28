import * as f from 'f'

class Tag {
  static is (tagNameOrComponent) {
    return f.is(String, tagNameOrComponent)
  }
}

export default Tag
