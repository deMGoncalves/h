import h from '@/h'
import * as f from 'f'
import Fragment from '@/fragment'

export default (props) =>
  <Fragment slot={props.slot}>
    {f.map(props.iterator, (attrs, index) => props.component(attrs, index))}
  </Fragment>
