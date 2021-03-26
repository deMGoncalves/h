import * as f from 'f'

const map = new Map()
const proxy = {
  delete: (id) => map.delete(id),
  get: (id) => f.or(map.get(id), {}),
  set: (id, node) => (map.set(id, node), node)
}

export default proxy
