import Text from '@/text'

class Children {
  #nodes

  constructor (nodes) {
    this.#nodes = nodes
  }

  static create (nodes) {
    return new Children(
      f.map(nodes, (textOrTag) =>
        Text.is(textOrTag) ? Text.create(textOrTag) : textOrTag)
    )
  }
}

export default Children
