import * as f from 'f'
import mapper from './mapper'
import paint from './paint'
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

  append (other) {
    this.#list.push(other)
    return this
  }

  replace (current, other) {
    f.splice(f.indexOf(this.#list, current), 1, other)
    return this
  }

  reflow (other) {
    rewind(this, other)
    return this
  }

  remove (current) {
    f.splice(f.indexOf(this.#list, current), 1)
    return this
  }

  static create (list, target) {
    return new Children(mapper(list), target)
  }
}

export default Children
