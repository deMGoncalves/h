import * as f from 'f';
export default (method) => (function () {
    return f.always(method.call(this, ...arguments))(f.or(this['__reflow__'], f.always(undefined))());
});
