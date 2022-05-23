import * as p5 from "p5"
import decorate from "../src/base/globals.mjs"

type P5RegTypes = 'init' | 'pre' | 'post' | 'remove'

type Class<T = object> = {
  new (...args: any[]): T
  prototype: T
}

declare global {
  var
    __decorate: typeof decorate,

    p5: {
      new (sketch?: (p: p5) => void, nodevt?: HTMLElement | string): p5

      VERSION: string
      instance: p5
      disableFriendlyErrors: typeof p5.prototype.disableFriendlyErrors

      prototype: p5 & {
        registerMethod(register: P5RegTypes, callback: (this: p5) => void): void
        registerPreloadMethod(name: PropertyKey, proto: object): void
      }
    }

  function preload(this: p5): void
  function setup(this: p5): void
  function draw(this: p5): void

  function windowResized(this: p5, evt?: UIEvent): boolean | void

  function keyTyped(this: p5, evt?: KeyboardEvent): boolean | void
  function keyPressed(this: p5, evt?: KeyboardEvent): boolean | void
  function keyReleased(this: p5, evt?: KeyboardEvent): boolean | void

  function touchStarted(this: p5, evt?: TouchEvent): boolean | void
  function touchMoved(this: p5, evt?: TouchEvent): boolean | void
  function touchEnded(this: p5, evt?: TouchEvent): boolean | void

  function mouseWheel(this: p5, evt?: WheelEvent): boolean | void

  function mouseMoved(this: p5, evt?: MouseEvent): boolean | void
  function mouseDragged(this: p5, evt?: DragEvent): boolean | void

  function mousePressed(this: p5, evt?: MouseEvent): boolean | void
  function mouseReleased(this: p5, evt?: MouseEvent): boolean | void

  function mouseClicked(this: p5, evt?: MouseEvent): boolean | void
  function doubleClicked(this: p5, evt?: MouseEvent): boolean | void
}
