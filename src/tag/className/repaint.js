import * as f from 'f'
import { after } from 'hook'
import dom from '@/dom'

const repaint = (className) =>
  f.always(className)(dom.query(className.target.id).className = className.value)

export default after(repaint)
