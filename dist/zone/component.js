import h from "../h/index";
import Hide from "../hide/index";
export default (zone, children) => h("section", { className: zone.className, slot: zone.slot },
    h(Hide, { if: zone.offScreen }, children));
