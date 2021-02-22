import * as f from 'f';
const slot = (children) => new Proxy(children, {
    get: (target, name) => f.or(target[name], f.find(target, (child) => f.equal(name, f.prop('slot', child))))
});
export default f.curry(slot);
