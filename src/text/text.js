import * as f from 'f'

class Text {
  #content

  get value () {
    return this.#content
  }

  constructor (content) {
    this.#content = content
  }

  static create (content) {
    return new Text(content)
  }

  static is (textOrTag) {
    return f.some([String, Number], f.is(textOrTag))
  }
}

export default Text
