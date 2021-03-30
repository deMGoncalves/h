import * as f from 'f'
import { after } from 'hook'
import dom from '@/dom'

const repaint = (text) =>
  f.always(text)(dom.query(text.id).textContent = text.content)

export default after(f.frame(repaint))
