import * as f from 'f'

class Listener {
  #name
  #parent
  #value

  get name () {
    return this.#name
  }

  get value () {
    return this.#value
  }

  constructor (name, value, parent) {
    this.#name = name
    this.#parent = parent
    this.#value = value
  }

  static create (props, parent) {
    return f.map(
      f.filter(
        f.toPairs(props),
        f.compose(f.test(/^on\S+$/), f.prop('[0]'))
      ),
      (args) => new Listener(...args, parent)
    )
  }
}

export default Listener
