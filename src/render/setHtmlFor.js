import setAttribute from './setAttribute'

export default (_key, value, parent) =>
  setAttribute('for', value, parent)
