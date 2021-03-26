import TextElement from './textElement'

class Child {
  static create (children, parent) {
    return children
      .map((nodeOrText) =>
        (nodeOrText instanceof Object)
          ? nodeOrText.setParent(parent)
          : TextElement.create(nodeOrText, parent))
  }
}

export default Child
