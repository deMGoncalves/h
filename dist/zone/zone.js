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
var _className, _offScreen, _slot;
var _a;
import * as d from "../dunders/index";
import * as f from 'f';
import paint from "../paint/index";
import repaint from "../repaint/index";
import component from "./component";
const render = f.magic('render');
let Zone = class Zone {
    constructor(props) {
        _className.set(this, void 0);
        _offScreen.set(this, void 0);
        _slot.set(this, void 0);
        __classPrivateFieldSet(this, _className, props.className);
        __classPrivateFieldSet(this, _slot, props.slot);
        __classPrivateFieldSet(this, _offScreen, f.T());
        setTimeout(() => f.lazyLoad(this[d.__element__], () => this[render]()));
        return this;
    }
    get className() {
        return __classPrivateFieldGet(this, _className);
    }
    get offScreen() {
        return __classPrivateFieldGet(this, _offScreen);
    }
    get slot() {
        return __classPrivateFieldGet(this, _slot);
    }
    [(_className = new WeakMap(), _offScreen = new WeakMap(), _slot = new WeakMap(), _a = render)]() {
        __classPrivateFieldSet(this, _offScreen, f.F());
        return this;
    }
};
__decorate([
    repaint
], Zone.prototype, _a, null);
Zone = __decorate([
    paint(component)
], Zone);
export default Zone;
