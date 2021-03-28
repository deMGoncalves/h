import Text from '@/text'

class Children {
  #nodes

  constructor (nodes) {
    this.#nodes = nodes
  }

  static create (nodes, parent) {
    return new Children(
      f.map(nodes, (textOrTag) =>
        Text.is(textOrTag)
          ? Text.create(textOrTag, parent)
          : textOrTag.setParent(parent))
    )
  }
}

export default Children
