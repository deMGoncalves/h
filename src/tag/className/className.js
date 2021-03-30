import * as f from 'f'
import paint from './paint'

@paint
class ClassName {
  #target
  #value

  get target () {
    return this.#target
  }

  get value () {
    return this.#value
  }

  constructor (value, target) {
    this.#target = target
    this.#value = value
  }

  static create (props, target) {
    return new ClassName(
      f.join(f.flatten(f.concat([], f.or(props.className, []))), ' '),
      target
    )
  }
}

export default ClassName
