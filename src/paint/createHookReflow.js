import * as f from 'f'
import * as d from '@/dunders'
import reflow from '@/reflow'
import createComponent from './createComponent.js'

export default function (klass, component, children) {
  f.assign(klass, {
    [d.__element__]: createComponent(klass, component, children),
    [d.__reflow__]: f.idle(() => reflow(klass[d.__element__], component(klass, children)))
  })

  return klass[d.__element__]
}
