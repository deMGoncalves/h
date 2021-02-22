import * as f from 'f';
import * as d from "../dunders/index";
export default (mathod) => function () {
    return f.always(mathod.call(this, ...arguments))(this[d.__reflow__] && this[d.__reflow__]());
};
