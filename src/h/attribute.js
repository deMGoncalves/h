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
    Object.entries(props)
      .filter(([key]) => !/^(on\S+|is|slot)$/.test(key))
      .map(([key, value]) => new Attribute(key, value, parent))
  }
}

export default Attribute