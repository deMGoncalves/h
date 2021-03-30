import * as f from 'f'
import hook from 'hook'

const paint = (events) =>
  f.assign(events, {
    [f.magic('paint')]: (element) =>
      f.forEach(events.list, (event) =>
        (element[f.toLower(event.name)] = event.listener))
  })

export default hook(paint)
