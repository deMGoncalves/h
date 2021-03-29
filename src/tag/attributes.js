import * as f from 'f'

class Attributes {
  #list
  #parent

  get list () {
    return f.map(this.#list, ([key, value]) => ({ key, value }))
  }

  get parent () {
    return this.#parent
  }

  constructor (list, parent) {
    this.#list = list
    this.#parent = parent
  }

  static create (list, parent) {
    return new Attributes(
      f.filter(f.entries(list), f.compose(f.not, f.test(/^(on\S+|is|slot)$/), f.prop('[0]'))),
      parent
    )
  }
}

export default Attributes
