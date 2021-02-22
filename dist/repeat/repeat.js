import h from "../h/index";
import * as f from 'f';
import Fragment from "../fragment/index";
export default (props) => h(Fragment, { slot: props.slot }, f.map(props.iterator, (attrs, index) => props.component(attrs, index)));
