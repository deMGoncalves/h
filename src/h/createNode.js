import filter from './filter'
import onlyEvents from './onlyEvents'
import onlyAttributes from './onlyAttributes'

export default (tagName, attributes, children) => (
  {
    get attributes () {
      return filter(attributes, onlyAttributes)
    },
    
    get children () {
      return children
    },

    get events () {
      return filter(attributes, onlyEvents)
    },

    get is () {
      return attributes.is
    },

    get slot () {
      return attributes.slot
    },

    get tagName () {
      return tagName
    }
  }
)
