import * as f from 'f'
import mapper from './mapper'
import paint from './paint'
import repaint from './repaint'
import rewind from './rewind'

@paint
class Children {
  #list
  #target

  get last () {
    return this.list[f.dec(f.len(this.list))]
  }

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

  @repaint.append
  append (other) {
    other.setParent(this.target)
    f.push(this.list, other)
    return this
  }

  @repaint.replace
  replace (child, other) {
    other.setParent(this.target)
    f.splice(this.list, f.indexOf(this.list, child), 1, other)
    return this
  }

  reflow (other) {
    rewind(this, other)
    return this
  }

  @repaint.remove
  remove (child) {
    f.splice(this.list, f.indexOf(this.list, child), 1)
    return this
  }

  static create (list, target) {
    return new Children(mapper(list), target)
  }
}

export default Children
