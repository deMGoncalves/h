export default (name, props, children) => (
  {
    get tagName () {
      return name
    },

    get attributes () {
      return props
    },

    get children () {
      return children
    }
  }
)
