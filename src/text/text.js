import * as f from 'f'
import paint from './paint'
import repaint from './repaint'

@paint
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

  get name () {
    return '#text'
  }

  get parent () {
    return this.#parent
  }

  get type () {
    return 3
  }

  constructor (content, parent) {
    this.#content = content
    this.#id = Symbol(this.name)
    this.#parent = parent
  }

  @repaint
  changeContent (content) {
    this.#content = content
    return this
  }

  reflow (other) {
    if (f.different(this.content, other.content)) { this.changeContent(other.content) }
    return this
  }

  static create (content, parent) {
    return new Text(content, parent)
  }

  static is (textOrTag) {
    return f.some([String, Number], f.is(f.__, textOrTag))
  }
}

export default Text
