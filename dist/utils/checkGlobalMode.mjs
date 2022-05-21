// https://developer.Mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/globalThis
export default function isGlobalMode() {
    return typeof globalThis.setup == 'function' ||
        typeof globalThis.draw == 'function';
}
