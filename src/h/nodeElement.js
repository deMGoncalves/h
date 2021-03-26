import Attribute from './attribute'
import Event from './event'

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
    this.#events = Event.create(props, this)
    this.#id = Symbol()
    this.#tagName = tagName
  }

  static create (tagName, props, children) {
    return new NodeElement (tagName, props, children)
  }
}

export default NodeElement
