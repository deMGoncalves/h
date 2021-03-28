class Attributes {
  #parent
  #props

  get parent () {
    return this.#parent
  }

  get props () {
    return this.#props
  }

  constructor (props, parent) {
    this.#parent = parent
    this.#props = props
  }

  static create (props, parent) {
    return new Attributes(
      f.filter(f.entries(props), f.compose(f.not, f.test(/^(on\S+|is|slot)$/), f.prop('[0]'))),
      parent
    )
  }
}

export default Attributes
