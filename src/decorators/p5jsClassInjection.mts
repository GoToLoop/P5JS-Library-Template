import type * as p5 from "p5";
import type { Class } from "../../typings/types";

import isGlobalMode from "../utils/checkGlobalMode.mjs";
import checkScriptsForAttr from "../utils/scriptTagAttrCheck.mjs";

import { AUTO, CREATE, INIT, DescriptorsAllTrue } from "../base/globals.mjs";

export default InjectToP5js;

function InjectToP5js(targetClass: Class): void; // isP5ParamLast is truthy

function InjectToP5js(
  isP5ParamLast?: boolean, // defaults to falsy
  createPrefix?: string, // defaults to "create" + classname
  scriptTagAttrName?: string // defaults to classname + "AutoExpose"
): ClassDecorator;

function InjectToP5js(
  isP5ParamLast?: boolean | Class,
  createPrefix = CREATE,
  scriptTagAttrName = AUTO)
{
  if (typeof isP5ParamLast == 'function')  InjectClassDecor(isP5ParamLast);
  else return InjectClassDecor; // @InjectToP5js()

  function InjectClassDecor(c: Class) {
    const
      { name } = c,
      instantiatorName = createPrefix + name,
      attrib = name.toLowerCase() + scriptTagAttrName, // data-ball-auto-expose

      instantiator = isP5ParamLast &&
        function(this: p5) {
          return new c(...arguments, this);
        } ||
        function(this: p5) {
          return new c(this, ...arguments);
        }
      ;

    globalThis.p5?.prototype.registerMethod(INIT, applyInjections);

    function applyInjections(this: p5) {
      if (isGlobalMode() || checkScriptsForAttr(attrib))  exposeClassGlobally();

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
