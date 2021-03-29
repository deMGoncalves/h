import * as f from 'f';
import create from "./create";
const paint = (componentRef) => (Entity) => new Proxy(function (props, children) {
    return (this instanceof Entity)
        ? create(Entity, ...arguments)
        : componentRef(create(Entity, props), children);
}, {
    get: (_target, key) => Entity[key],
    set: (_target, key, value) => f.T(Entity[key] = value)
});
export default paint;
