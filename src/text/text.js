import * as f from 'f'

class Text {
  #content
  #id

  get content () {
    return this.#content
  }

  get id () {
    return this.#id
  }

  constructor (content) {
    this.#content = content
    this.#id = Symbol()
  }

  static create (content) {
    return new Text(content)
  }

  static is (textOrTag) {
    return f.some([String, Number], f.is(textOrTag))
  }
}

export default Text
