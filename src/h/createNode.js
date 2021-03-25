import filter from './filter'
import onlyEvents from './onlyEvents'
import onlyAttributes from './onlyAttributes'
import textMapper from './textMapper'

export default (tagName, attributes, children) => (
  {
    get attributes () {
      return filter(attributes, onlyAttributes)
    },
    
    get children () {
      return textMapper(children)
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
    },

    __id__: Symbol()
  }
)
