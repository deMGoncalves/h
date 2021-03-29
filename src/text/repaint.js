import * as f from 'f'
import { after } from 'hook'
import dom from '@/dom'

const repaint = (text) =>
  ((dom.query(text.id).textContent = text.content), text)

export default after(f.frame(repaint))
