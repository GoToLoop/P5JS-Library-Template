import isGlobalMode from "../utils/checkGlobalMode.mjs";
import checkScriptsForAttr from "../utils/scriptTagAttrCheck.mjs";
import { AUTO, CREATE, INIT, DescriptorsAllTrue } from "../base/globals.mjs";
export default InjectToP5js;
function InjectToP5js(isP5ParamLast, createPrefix = CREATE, scriptTagAttrName = AUTO) {
    if (typeof isP5ParamLast == 'function')
        InjectClassDecor(isP5ParamLast);
    else
        return InjectClassDecor; // @InjectToP5js()
    function InjectClassDecor(c) {
        const { name } = c, instantiatorName = createPrefix + name, attrib = name.toLowerCase() + scriptTagAttrName, // data-ball-auto-expose
        instantiator = isP5ParamLast &&
            function () {
                return new c(...arguments, this);
            } ||
            function () {
                return new c(this, ...arguments);
            };
        globalThis.p5?.prototype.registerMethod(INIT, applyInjections);
        function applyInjections() {
            if (isGlobalMode() || checkScriptsForAttr(attrib))
                exposeClassGlobally();
            Object.defineProperty(this, instantiatorName, {
                value: instantiator,
                ...DescriptorsAllTrue
            });
        }
        function exposeClassGlobally() {
            name in globalThis || Object.defineProperty(globalThis, name, {
                value: c,
                ...DescriptorsAllTrue
            });
        }
    }
}
