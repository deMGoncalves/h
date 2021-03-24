import * as f from 'f';
import withoutSlot from "./withoutSlot";
import withSlot from "./withSlot";
export default (children) => new Proxy(f.filter(children, withoutSlot), {
    get: (target, name) => f.or(target[name], f.filter(children, withSlot(name)))
});
