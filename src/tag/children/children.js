import * as f from 'f'
import Text from '@/text'
import render from './render'

@render
class Children {
  #list
  #parent

  get list () {
    return this.#list
  }

  get parent () {
    return this.#parent
  }

  constructor (list, parent) {
    this.#list = list
    this.#parent = parent
  }

  reflow (other) {
    f.forEach(
      f.zip(this.list, other.list),
      ([child, otherChild]) => child.reflow(otherChild)
    )
    return this
  }

  static create (list, parent) {
    return new Children(
      f.map(list, (textOrTag) =>
        Text.is(textOrTag) ? Text.create(textOrTag, parent) : textOrTag.setParent(parent)),
      parent
    )
  }
}

export default Children
