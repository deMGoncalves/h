import * as f from 'f'
import compare from './compare'
import convertToList from './convertToList'
import mapper from './mapper'
import paint from './paint'
import repaint from './repaint'

@paint
class Attributes {
  #map
  #parent

  get list () {
    return convertToList(this.#map)
  }

  get parent () {
    return this.#parent
  }

  constructor (map, parent) {
    this.#map = map
    this.#parent = parent
  }

  reflow (other) {
    compare(this, other)
    return this
  }

  @repaint
  removeItem (key) {
    this.#map.remove(key)
    return this
  }

  @repaint
  setItem (key, value) {
    if(f.and(key, value))
      this.#map.set(key, value)
    return this
  }

  static create (props, parent) {
    return new Attributes(mapper(props), parent)
  }
}

export default Attributes
