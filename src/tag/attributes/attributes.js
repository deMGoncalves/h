import * as f from 'f'
import mapper from './mapper'
import paint from './paint'
import repaint from './repaint'

@paint
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
    f.forEach(
      f.zip(this.list, other.list),
      ([attribute, otherAttribute]) => (
        f.and(
          f.equal(attribute.key, otherAttribute.key),
          f.different(attribute.value, otherAttribute.value)
        ) && this.setAttribute(attribute.key, otherAttribute.value),

        f.different(attribute.key, otherAttribute.key) && (
          this.removeAttribute(attributes.key),
          this.setAttribute(otherAttribute.key, otherAttribute.value)
        )
      )
    )
    return this
  }

  @repaint
  removeAttribute (key) {
    this.#list.remove(key)
    return this
  }

  @repaint
  setAttribute (key, value) {
    this.#list.set(key, value)
    return this
  }

  static create (props, parent) {
    return new Attributes(mapper(props), parent)
  }
}

export default Attributes
