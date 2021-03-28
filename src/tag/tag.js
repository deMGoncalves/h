import * as f from 'f'
import Children from './children'
import ClassName from './className'

class Tag {
  #children
  #className
  #id
  #is
  #slot
  #tagName

  get children () {
    return this.#children
  }

  get className () {
    return this.#className
  }

  get id () {
    return this.#id
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
    this.#children = Children.create(children)
    this.#className = ClassName.create(props)
    this.#id = Symbol()
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
