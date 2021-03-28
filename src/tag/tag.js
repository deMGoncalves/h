import * as f from 'f'
import ClassName from './className'

class Tag {
  #className
  #is
  #slot
  #tagName

  get className () {
    return this.#className
  }

  get is () {
    return this.#is
  }

  get slot () {
    return this.#slot
  }

  get tagName () {
    return this.#tagName
  }

  constructor (tagName, props, children) {
    this.#className = ClassName.create(props)
    this.#is = props.is
    this.#slot = props.slot
    this.#tagName = tagName
  }

  static create (tagName, props, children) {
    return new Tag(tagName, props, children)
  }

  static is (tagNameOrComponent) {
    return f.is(String, tagNameOrComponent)
  }
}

export default Tag
