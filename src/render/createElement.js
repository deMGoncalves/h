export default (descriptor) =>
  descriptor.tagName
    ? document.createElement(descriptor.tagName, { is: descriptor.is })
    : document.createDocumentFragment()
