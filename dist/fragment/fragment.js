var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var _children, _id, _slot;
var Fragment_1;
import Children from "../tag/children/index";
import paint from "./paint";
let Fragment = Fragment_1 = class Fragment {
    constructor(props, children) {
        _children.set(this, void 0);
        _id.set(this, void 0);
        _slot.set(this, void 0);
        __classPrivateFieldSet(this, _children, Children.create(children));
        __classPrivateFieldSet(this, _id, Symbol(this.name));
        __classPrivateFieldSet(this, _slot, props.slot);
    }
    get children() {
        return __classPrivateFieldGet(this, _children);
    }
    get id() {
        return __classPrivateFieldGet(this, _id);
    }
    get name() {
        return '#fragmanet';
    }
    get slot() {
        return __classPrivateFieldGet(this, _slot);
    }
    get type() {
        return 11;
    }
    reflow(other) {
        this.children.reflow(other.children);
        return this;
    }
    static execute(props, children) {
        console.log('Fragment exexute', props, children.main);
        return new Fragment_1(props, children);
    }
};
_children = new WeakMap(), _id = new WeakMap(), _slot = new WeakMap();
Fragment = Fragment_1 = __decorate([
    paint
], Fragment);
export default Fragment.execute;
