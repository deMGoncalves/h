import * as f from 'f'

export default (tagName, props, children) => (
  {
    get tagName () {
      return tagName
    },

    get attributes () {
      return f.toPairs(props)
    },

    get children () {
      return children
    }
  }
)
