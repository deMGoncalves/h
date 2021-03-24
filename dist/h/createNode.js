import filter from "./filter";
import onlyEvents from "./onlyEvents";
import onlyAttributes from "./onlyAttributes";
export default (tagName, props, children) => ({
    get attributes() {
        return filter(props, onlyAttributes);
    },
    get children() {
        return children;
    },
    get events() {
        return filter(props, onlyEvents);
    },
    get slot() {
        return props.slot;
    },
    get tagName() {
        return tagName;
    }
});
