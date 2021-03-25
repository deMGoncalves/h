import * as f from 'f'

export default (_componentRef, entity) =>
  f.has('__rootNode__', entity)
