import h from "../h/index";
import * as f from 'f';
import Fragment from "../fragment/index";
export default (props, children) => h(Fragment, { slot: props.slot }, f.map(props.iterator, (descriptor, index) => props.component(descriptor, children, index)));
