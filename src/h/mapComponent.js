import * as f from 'f'
import isComponent from './isComponent'

export default f.map(f.__, (nodeOrComponent) =>
  isComponent(nodeOrComponent) ? nodeOrComponent() : nodeOrComponent)
