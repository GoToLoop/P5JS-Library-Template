export const CREATE = 'create', AUTO = 'AutoExpose', INIT = 'init', PRE = 'pre', POST = 'post', REMOVE = 'remove', DescriptorsAllTrue = {
    writable: true,
    configurable: true,
    enumerable: true
};
// https://GitHub.com/microsoft/tslib
export default function __decorate(decors, o, k, desc) {
    const c = arguments.length;
    var d, i = decors.length, r = c < 3 ? o : desc !== null ? desc : Object.getOwnPropertyDescriptor(o, k);
    while (i--)
        if (d = decors[i])
            r = (c < 3 ? d(r) : c > 3 ? d(o, k, r) : d(o, k)) || r;
    return c > 3 && r && Object.defineProperty(o, k, r), r;
}
globalThis.__decorate ||= __decorate;
