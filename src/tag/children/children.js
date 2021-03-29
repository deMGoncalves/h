import * as f from 'f'
import Text from '@/text'
import reflow from './reflow'
import render from './render'

@render
@reflow
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

  static create (list, parent) {
    return new Children(
      f.map(list, (textOrTag) =>
        Text.is(textOrTag) ? Text.create(textOrTag, parent) : textOrTag.setParent(parent)),
      parent
    )
  }
}

export default Children
