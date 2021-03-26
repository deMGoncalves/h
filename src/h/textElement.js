class TextElement {
  #parent
  #textContent

  get textContent () {
    return this.#textContent
  }

  constructor (textContent, parent) {
    this.#parent = parent
    this.#textContent = textContent
  }

  static create (textContent, parent) {
    return new TextElement(textContent, parent)
  }
}

export default TextElement
