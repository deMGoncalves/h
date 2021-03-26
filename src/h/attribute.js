import * as f from 'f'

class Attribute {
  #key
  #parent
  #value

  get key () {
    return this.#key
  }

  get value () {
    return this.#value
  }

  constructor (key, value, parent) {
    this.#key = key
    this.#parent = parent
    this.#value = value
  }

  static create (props, parent) {
    return f.map(
      f.filter(
        f.toPairs(props),
        f.compose(f.not, f.test(/^(on\S+|is|slot)$/), f.prop('[0]'))
      ),
      (args) => new Attribute(...args, parent)
    )
  }
}

export default Attribute
