import paint from './paint'

@paint
class Comment {
  #id

  get id () {
    return this.#id
  }

  get name () {
    return '#comment'
  }

  get type () {
    return 8
  }

  constructor () {
    this.#id = Symbol(this.name)
  }

  reflow () {
    return this
  }

  static create () {
    return new Comment()
  }
}

export default Comment.create
