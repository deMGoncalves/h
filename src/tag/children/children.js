import append from './append'
import mapper from './mapper'
import paint from './paint'
import remove from './remove'
import repaint from './repaint'
import replace from './replace'
import rewind from './rewind'

@paint
class Children {
  #list
  #target

  get list () {
    return [...this.#list]
  }

  get target () {
    return this.#target
  }

  constructor (list, target) {
    this.#list = list
    this.#target = target
  }

  @repaint
  append (child) {
    append(this.#list, child)
    return this
  }

  @repaint
  replace (child, other) {
    replace(this.#list, child, other)
    return this
  }

  reflow (other) {
    rewind(this, other)
    return this
  }

  @repaint
  remove (child) {
    remove(this.#list, child)
    return this
  }

  static create (list, target) {
    return new Children(mapper(list), target)
  }
}

export default Children
