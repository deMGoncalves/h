import * as f from 'f'
import render from './render'

@render
class Attributes {
  #list
  #parent

  get list () {
    return f.map([...this.#list], ([key, value]) => ({ key, value }))
  }

  get parent () {
    return this.#parent
  }

  constructor (list, parent) {
    this.#list = list
    this.#parent = parent
  }

  reflow (other) {
    return this
  }

  remove (key) {
    this.#list.remove(key)
    return this
  }

  set (key, value) {
    this.#list.set(key, value)
    return this
  }

  static create (props, parent) {
    return new Attributes(
      new Map(f.filter(f.entries(props), f.compose(f.not, f.test(/^(className|is|slot|on\S+)$/i), f.prop('[0]')))),
      parent
    )
  }
}

export default Attributes
