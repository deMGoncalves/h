import * as f from 'f'
import TextElement from './textElement'

class Child {
  static mapper (children, parent) {
    return f.map(
      children,
      (nodeOrText) =>
        TextElement.is(nodeOrText)
          ? TextElement.create(nodeOrText, parent)
          : nodeOrText.setParent(parent)
    )
  }
}

export default Child
