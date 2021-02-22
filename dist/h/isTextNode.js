import * as f from 'f';
export default (target) => f.or(f.is(String, target), f.is(Number, target));
