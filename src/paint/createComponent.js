import * as f from 'f'
import * as d from '@/dunders'

export default (instance, component, children) =>
  f.assign(component(instance, children), { [d.__klass__]: instance })
