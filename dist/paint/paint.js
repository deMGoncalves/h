import * as f from 'f';
import onComponent from "./onComponent";
import onObject from "./onObject";
export default (component) => (Klass) => new Proxy(function (props, children) {
    return (this instanceof Klass)
        ? onObject(new Klass(...arguments), component)
        : onComponent(new Klass(Object.assign({}, props)), component, children);
}, {
    get: (_, key) => Klass[key],
    set: (_, key, value) => f.T(Klass[key] = value)
});
