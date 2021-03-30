import * as f from 'f'
import compare from './compare'
import convertToList from './convertToList'
import mapper from './mapper'
import paint from './paint'
import repaint from './repaint'

@paint
class Attributes {
  #map
  #target

  get list () {
    return convertToList(this.#map)
  }

  get target () {
    return this.#target
  }

  constructor (map, target) {
    this.#map = map
    this.#target = target
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

  static create (props, target) {
    return new Attributes(mapper(props), target)
  }
}

export default Attributes
