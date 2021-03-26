class Fragment {
  #children
  #id
  #slot

  get attributes () {
    return []
  }

  get children () {
    return this.#children
  }

  get id () {
    return this.#id
  }

  get listeners () {
    return []
  }

  get slot () {
    return this.#slot
  }

  constructor (props, children) {
    this.#children = children
    this.#id = Symbol()
    this.#slot = props.slot
  }

  static create (props, children) {
    return new Fragment(props, children)
  }
}

export default Fragment.create
