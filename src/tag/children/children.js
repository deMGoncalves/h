import * as f from 'f'
import mapper from './mapper'
import paint from './paint'
import repaint from './repaint'
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
    this.#list.push(child)
    return this
  }

  @repaint
  replace (child, other) {
    f.splice(f.indexOf(this.#list, child), 1, other)
    return this
  }

  reflow (other) {
    rewind(this, other)
    return this
  }

  @repaint
  remove (child) {
    f.splice(f.indexOf(this.#list, child), 1)
    return this
  }

  static create (list, target) {
    return new Children(mapper(list), target)
  }
}

export default Children
