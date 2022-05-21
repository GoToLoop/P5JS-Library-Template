import type { Class } from "../../typings/types";
export default InjectToP5js;
declare function InjectToP5js(targetClass: Class): void;
declare function InjectToP5js(isP5ParamLast?: boolean, // defaults to falsy
createPrefix?: string, // defaults to "create" + classname
scriptTagAttrName?: string): ClassDecorator;
//# sourceMappingURL=p5jsClassInjection.d.mts.map