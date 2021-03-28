import * as f from 'f'
import Attributes from './attributes'
import Children from './children'
import ClassName from './className'

class Tag {
  #attributes
  #children
  #className
  #id
  #is
  #parent
  #slot
  #tagName

  get attributes () {
    return this.#attributes
  }

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

  get parent () {
    return this.#parent
  }

  get slot () {
    return this.#slot
  }

  get tagName () {
    return this.#tagName
  }

  constructor (tagName, props, children) {
    this.#attributes = Attributes.create(props, parent)
    this.#children = Children.create(children, parent)
    this.#className = ClassName.create(props, parent)
    this.#id = Symbol()
    this.#is = props.is
    this.#slot = props.slot
    this.#tagName = tagName
  }

  setParent (parent) {
    this.#parent = parent
    return this
  }

  static create (tagName, props, children) {
    return new Tag(tagName, props, children)
  }

  static is (tagNameOrComponent) {
    return f.is(String, tagNameOrComponent)
  }
}

export default Tag
