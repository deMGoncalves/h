export default (descriptor) =>
  document.createElement(descriptor.tagName, { is: descriptor.attributes.is })
