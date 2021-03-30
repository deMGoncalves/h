import * as f from 'f'
import mapper from './mapper'
import paint from './paint'
import repaint from './repaint'

@paint
class Attributes {
  #map
  #parent

  get list () {
    return f.map([...this.#map], ([key, value]) => ({ key, value }))
  }

  get parent () {
    return this.#parent
  }

  constructor (map, parent) {
    this.#map = map
    this.#parent = parent
  }

  reflow (other) {
    f.forEach(
      f.zip(this.list, other.list),
      ([attribute, otherAttribute]) => (
        f.and(
          f.equal(attribute.key, otherAttribute.key),
          f.different(attribute.value, otherAttribute.value)
        ) && this.setKey(attribute.key, otherAttribute.value),

        f.different(attribute.key, otherAttribute.key) && (
          this.removeKey(attributes.key),
          this.setKey(otherAttribute.key, otherAttribute.value)
        )
      )
    )
    return this
  }

  @repaint
  removeKey (key) {
    this.#map.remove(key)
    return this
  }

  @repaint
  setKey (key, value) {
    this.#map.set(key, value)
    return this
  }

  static create (props, parent) {
    return new Attributes(mapper(props), parent)
  }
}

export default Attributes
