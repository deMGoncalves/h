export default (text) => (
  {
    get textContent () {
      return text
    },

    changeTextContent (value) {
      return text = value
    },

    __id__: Symbol()
  }
)
