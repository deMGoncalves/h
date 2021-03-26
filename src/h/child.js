import * as f from 'f'
import TextElement from './textElement'

class Child {
  static mapper (children, parent) {
    return f.map(
      children,
      (nodeOrText) =>
        f.or(f.is(String, nodeOrText), f.is(Number, nodeOrText))
          ? TextElement.create(nodeOrText, parent)
          : nodeOrText.setParent(parent)
    )
  }
}

export default Child
