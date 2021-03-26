class Child {
  static create (children, parent) {
    return children
      .map((child) =>
        (child instanceof Object)
          ? child.setParent(parent)
          : TextElement.create(child, parent))
  }
}

export default Child
