import * as f from 'f'
import reflow from './reflow'
import render from './render'

@render
@reflow
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

  changeContent (newContent) {
    this.#content = newContent
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
