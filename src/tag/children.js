import Text from '@/text'

class Children {
  #nodes
  #parent

  get nodes () {
    return this.#nodes
  }

  get parent () {
    return this.#parent
  }

  constructor (nodes, parent) {
    this.#nodes = nodes
    this.#parent = parent
  }

  static create (nodes, parent) {
    return new Children(
      f.map(nodes, (textOrTag) =>
        Text.is(textOrTag) ? Text.create(textOrTag, parent) : textOrTag.setParent(parent)),
      parent
    )
  }
}

export default Children
