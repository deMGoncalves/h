import * as f from 'f'
import Attribute from './attribute'
import Child from './child'
import Listener from './listener'

class NodeElement {
  #attributes
  #children
  #listeners
  #id
  #parent
  #tagName

  get attributes () {
    return this.#attributes
  }

  get children () {
    return this.#children
  }

  get listeners () {
    return this.#listeners
  }

  get id () {
    return this.#id
  }

  get tagName () {
    return this.#tagName
  }

  constructor (tagName, props, children) {
    this.#attributes = Attribute.create(props, this)
    this.#children = Child.mapper(children, this)
    this.#listeners = Listener.create(props, this)
    this.#id = Symbol()
    this.#parent = {}
    this.#tagName = tagName
  }

  setParent (parent) {
    this.#parent = parent
    return this
  }

  static create (tagName, props, children) {
    return new NodeElement (tagName, props, children)
  }
  
  static is (tagNameOrComponent) {
    return f.is(String, tagNameOrComponent)
  }
}

export default NodeElement
