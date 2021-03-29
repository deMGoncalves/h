import * as f from 'f'
import hook from 'hook'

const render = (events) =>
  f.assign(events, {
    [f.magic('render')]: (element) =>
      f.forEach(events.list, (event) =>
        (element[f.toLower(event.name)] = event.listener))
  })

export default hook(render)

