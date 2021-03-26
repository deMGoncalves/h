import * as f from 'f'

class TextElement {
  #id
  #parent
  #textContent

  get textContent () {
    return this.#textContent
  }

  constructor (textContent, parent) {
    this.#id = Symbol()
    this.#parent = parent
    this.#textContent = textContent
  }

  static create (textContent, parent) {
    return new TextElement(textContent, parent)
  }

  static is (textOrNode) {
    return f.or(
      f.is(String, textOrNode),
      f.is(Number, textOrNode)
    )
  }
}

export default TextElement
