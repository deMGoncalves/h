import * as f from 'f'

class Listener {
  #event
  #handler
  #parent
  
  get event () {
    return this.#event
  }    
  
  get handler () {
    return this.#handler
  }

  constructor (event, handler, parent) {
    this.#event = event
    this.#handler = handler
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
