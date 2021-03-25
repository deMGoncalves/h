import h from '@/h'
import * as f from 'f'
import Fragment from '@/fragment'

export default (props, children) =>
  <Fragment slot={props.slot}>
    {
      f.map(props.iterator, (descriptor, index) =>
        props.component(descriptor, children, index))
    }
  </Fragment>
