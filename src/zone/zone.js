import * as f from 'f'
import lazyLoad from 'lazyload'
import * as d from '@/dunders'
import paint from '@/paint'
import repaint from '@/repaint'
import component from './component'

const render = f.magic('render')

@paint(component)
class Zone {
  #className
  #offScreen
  #slot

  get className () {
    return this.#className
  }

  get offScreen () {
    return this.#offScreen
  }

  get slot () {
    return this.#slot
  }

  constructor (props) {
    this.#className = props.className
    this.#slot = props.slot
    this.#offScreen = f.T()

    setTimeout(() =>
      lazyLoad(this[d.__element__], () => this[render]()))

    return this
  }

  @repaint
  [render] () {
    this.#offScreen = f.F()
    return this
  }
}

export default Zone
