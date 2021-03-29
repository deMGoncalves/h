import * as f from 'f'

const append = (element, node) =>
  element.append(node[f.magic('render')])

export default f.frame(append)
