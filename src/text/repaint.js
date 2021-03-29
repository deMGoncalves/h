import { after } from 'hook'

const repaint = (text) =>
  console.log(text)

export default after(repaint)
