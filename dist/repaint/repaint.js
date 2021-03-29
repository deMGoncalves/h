import * as f from 'f';
const repaint = function (_entity, _method, descriptor) {
    const method = descriptor.value;
    return f.assign(descriptor, {
        value: function () {
            return f.always(method.apply(this, arguments))(this[f.magic('repaint')]());
        }
    });
};
export default repaint;
