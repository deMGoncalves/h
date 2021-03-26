import * as f from 'f'

class Listener {
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
        f.compose(f.test(/^on\S+$/), f.prop('[0]'))
      ),
      (args) => new Listener(...args, parent)
    )
  }
}

export default Listener
