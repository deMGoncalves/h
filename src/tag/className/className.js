import * as f from 'f'
import flatten from './flatten'
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
    return new ClassName(flatten(props), target)
  }
}

export default ClassName
