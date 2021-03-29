import * as f from 'f';
const repaint = function (_entity, _method, descriptor) {
    const method = descriptor.value;
    return f.assign(descriptor, {
        value: function () {
            return f.always(method.apply(this, arguments))(f.or(this[f.magic('repaint')], f.always(null))());
        }
    });
};
export default repaint;
