import * as f from 'f'

class Listener {
  #handler
  #name
  #parent
  
  get handler () {
    return this.#handler
  }

  get name () {
    return this.#name
  }    

  constructor (name, handler, parent) {
    this.#handler = handler
    this.#name = name
    this.#parent = parent
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
