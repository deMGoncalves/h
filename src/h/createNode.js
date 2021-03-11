export default (tagName, props, children) => (
  {
    get tagName () {
      return tagName
    },

    get attributes () {
      return props
    },

    get children () {
      return children
    }
  }
)
