import * as f from 'f'

class ClassName {
  #value

  get value () {
    return this.#value
  }

  constructor (value) {
    this.#value = value
  }

  static create (props) {
    return new ClassName(f.join(f.flatten(f.concat([], f.or(props.className, []))), ' '))
  }
}

export default ClassName
