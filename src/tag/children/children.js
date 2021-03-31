import * as f from 'f'
import mapper from './mapper'
import paint from './paint'
import repaint from './repaint'
import rewind from './rewind'

@paint
class Children {
  #list

  get last () {
    return this.list[f.dec(f.len(this.list))]
  }

  get list () {
    return this.#list
  }

  constructor (list) {
    this.#list = list
  }

  @repaint.append
  append (other) {
    f.push(this.list, other)
    return this
  }

  @repaint.replace
  replace (child, other) {
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

  static create (list) {
    return new Children(mapper(list))
  }
}

export default Children
