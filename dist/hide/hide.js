import Fragment from "../fragment/index";
export default (props, children) => props.if
    ? Fragment
    : children;
