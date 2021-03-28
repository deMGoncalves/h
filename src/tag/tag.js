import * as f from 'f'

class Tag {
  #tagName

  get tagName () {
    return this.#tagName
  }

  constructor (tagName, props, children) {
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
