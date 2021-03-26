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
}

export default TextElement
