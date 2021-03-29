import * as f from 'f'

const map = new Map()
const mapper = {
  delete: (id) => map.delete(id),
  get: (id) => f.or(map.get(id), {}),
  set: (id, tagOrText) => (map.set(id, tagOrText), tagOrText)
}

export default mapper
