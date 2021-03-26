import Attribute from './attribute'

class NodeElement {
  #attributes
  #children
  #events
  #id
  #tagName

  get attributes () {
    return this.#attributes
  }

  get children () {
    return this.#children
  }

  get events () {
    return this.#events
  }

  get id () {
    return this.#id
  }

  get tagName () {
    return this.#tagName
  }

  constructor (tagName, props, children) {
    this.#attributes = Attribute.create(props, this)
    this.#children = children
    this.#id = Symbol()
    this.#tagName = tagName
  }

  static create (tagName, props, children) {
    return new NodeElement (tagName, props, children)
  }
}

export default NodeElement
