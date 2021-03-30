import * as f from 'f'
import mapper from './mapper'
import paint from './paint'

@paint
class Children {
  #list
  #target

  get list () {
    return this.#list
  }

  get target () {
    return this.#target
  }

  constructor (list, target) {
    this.#list = list
    this.#target = target
  }

  append (child) {
    this.#list.push(child)
    return this
  }

  reflow (other) {
    f.forEach(
      f.zip(this.list, other.list),
      ([child, otherChild]) => child.reflow(otherChild)
    )
    return this
  }

  static create (list, target) {
    return new Children(mapper(list), target)
  }
}

export default Children
