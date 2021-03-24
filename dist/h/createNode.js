import * as f from 'f';
export default (tagName, props, children) => ({
    get attributes() {
        return f.filter(f.toPairs(props), f.compose(f.not, f.test(/^on/), f.prop('[0]')));
    },
    get children() {
        return children;
    },
    get events() {
        return f.filter(f.toPairs(props), f.compose(f.test(/^on/), f.prop('[0]')));
    },
    get slot() {
        return props.slot;
    },
    get tagName() {
        return tagName;
    }
});
