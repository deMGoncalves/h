export default (attributes, children) => ({
    get attributes() {
        return [];
    },
    get children() {
        return children;
    },
    get events() {
        return [];
    },
    get slot() {
        return attributes.slot;
    }
});
