import * as f from 'f'

class ClassName {
  #parent
  #value

  get value () {
    return this.#value
  }

  constructor (value, parent) {
    this.#parent = parent
    this.#value = value
  }

  static create (props, parent) {
    return new ClassName(
      f.join(f.flatten(f.concat([], f.or(props.className, []))), ' '),
      parent
    )
  }
}

export default ClassName
