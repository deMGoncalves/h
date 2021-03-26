class Event {
  #key
  #parent
  #value

  get key () {
    return this.#key
  }

  get value () {
    return this.#value
  }

  constructor (key, value, parent) {
    this.#key = key
    this.#parent = parent
    this.#value = value
  }

  static create (props, parent) {
    return Object
      .entries(props)
      .filter(([key]) => /^on\S+$/i.test(key))
      .map(([key, value]) => new Event(key, value, parent))
  }
}

export default Event
