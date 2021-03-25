import hook from './hook'

export default (entity) =>
  new Proxy({}, hook(entity))
