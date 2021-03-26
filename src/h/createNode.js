import * as f from 'f'
import filter from './filter'
import onlyEvents from './onlyEvents'
import onlyAttributes from './onlyAttributes'
import textMapper from './textMapper'

export default function (tagName, attributes, children) {
  const _attributes = filter(attributes, onlyAttributes)
  const _events = filter(attributes, onlyEvents)
  const _children = textMapper(children)

  return {
    get attributes () {
      return _attributes
    },
    
    get children () {
      return _children
    },

    get events () {
      return _events
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

    changeAttribute(key, value) {
      _attributes.some((attribute) =>
        f.equal(key, attribute[0]) && f.T(attribute[1] = value))

      return value
    },

    __id__: Symbol()
  }
}
