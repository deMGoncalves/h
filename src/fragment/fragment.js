import Children from '@/tag/children'
import paint from './paint'

@paint
class Fragment {
  #children
  #id
  #parent
  #slot

  get children () {
    return this.#children
  }

  get id () {
    return this.#id
  }

  get name () {
    return '#fragmanet'
  }

  get parent () {
    return this.#parent
  }

  get slot () {
    return this.#slot
  }

  get type () {
    return 11
  }

  constructor (props, children) {
    this.#children = Children.create(children, this)
    this.#id = Symbol(this.name)
    this.#slot = props.slot
  }

  reflow (other) {
    this.children.reflow(other.children)
    return this
  }

  setParent (parent) {
    this.#parent = parent
    return this
  }

  static execute (props, children) {
    return new Fragment(props, children)
  }
}

export default Fragment.execute
