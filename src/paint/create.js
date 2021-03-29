import * as f from 'f'

export default (Entity, ...args) =>
  f.assign(
    new Entity(...args),
    {
      [f.magic('repaint')]: function () {
        console.log('repaint', this)
      }
    }
  )
