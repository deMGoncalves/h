import * as f from 'f'
import paint from './paint'

@paint
class Events {
  #list
  #parent

  get list () {
    return f.map(this.#list, ([name, listener]) => ({ name, listener }))
  }

  get parent () {
    this.#parent
  }

  constructor (list, parent) {
    this.#list = list
    this.#parent = parent
  }

  static create (props, parent) {
    return new Events (
      f.filter(f.entries(props), f.compose(f.test(/^on\S+$/i), f.prop('[0]'))),
      parent
    )
  }
}

export default Events
