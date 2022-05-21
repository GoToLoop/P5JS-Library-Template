export default function isGlobalMode() {
  return typeof globalThis.setup == 'function' ||
         typeof globalThis.draw  == 'function'
}
