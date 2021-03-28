import * as f from 'f'

class Text {
  #content
  #id
  #parent

  get content () {
    return this.#content
  }

  get id () {
    return this.#id
  }

  get parent () {
    return this.#parent
  }

  constructor (content, parent) {
    this.#content = content
    this.#id = Symbol()
    this.#parent = parent
  }

  static create (content, parent) {
    return new Text(content, parent)
  }

  static is (textOrTag) {
    return f.some([String, Number], f.is(textOrTag))
  }
}

export default Text
