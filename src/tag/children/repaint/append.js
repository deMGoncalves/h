import * as f from 'f'
import dom from '@/dom'

export default (children, child) =>
  dom.query(children.target.id).append(child[f.magic('paint')]())
