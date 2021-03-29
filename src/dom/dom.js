import * as f from 'f'

const map = new Map()
const dom = {
  remove: (id) => map.delete(id),
  query: (id) => f.or(map.get(id), {}),
  append: (id, tagOrText) => (map.set(id, tagOrText), tagOrText)
}

export default dom
