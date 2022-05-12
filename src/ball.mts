/**
 * P5js Library Template (v1.0.3)
 * GoToLoop (2022-Apr-08)
 *
 * https://Discourse.Processing.org/t/
 * g4js-developing-a-new-gui-library-for-p5-js/36116/8
 *
 * https://GitHub.com/GoToLoop/P5JS-Library-Template
 * https://GoToLoop.GitHub.io/P5JS-Library-Template
*/

import type * as p5 from "p5";
// import {} from "p5/global";

declare namespace globalThis {
  const p5: { instance: p5 } & Function;
  var Ball: Function
}

export default class Ball {
  static readonly VEL = 2;
  static readonly MIN_RAD = 5;
  static readonly MAX_RAD = 30;
  static readonly ALL_COLORS = 0x1000;

  pos: p5.Vector;
  vel: p5.Vector;

  rad = 0;
  c = null! as p5.Color;

  constructor(public p = globalThis.p5?.instance) {
    this.pos = p.createVector();
    this.vel = p.createVector();
    this.reset();
  }

  reset() {
    const
      { p, pos, vel } = this,
      { VEL, MIN_RAD, MAX_RAD, ALL_COLORS } = Ball,
      r = this.rad = p.round(p.random(MIN_RAD, MAX_RAD));

    pos.set(p.random(r, p.width - r), p.random(r, p.height - r));
    vel.set(p.random(-VEL, VEL), p.random(-VEL, VEL));

    this.c = p.color('#' + p.hex(~~p.random(ALL_COLORS), 3));

    return this;
  }

  update() {
    const { p: { width: w, height: h }, pos, vel, rad } = this;

    pos.add(vel);

    if (pos.x > w - rad || pos.x < rad)  vel.x *= -1;
    if (pos.y > h - rad || pos.y < rad)  vel.y *= -1;

    return this;
  }

  display() {
    this.p.fill(this.c).circle(this.pos.x, this.pos.y, this.rad << 1);
    return this;
  }
}

function createBall(this: p5) {
  return new Ball(this);
}

export function attachBallConstructorAsP5Method() { // p5::createBall()
  if (typeof globalThis.p5 == 'function')
    return !!(globalThis.p5.prototype.createBall = createBall);
  return false;
}

export function exposeBallConstructors() {
  globalThis.Ball = Ball; // global class Ball
  return attachBallConstructorAsP5Method(); // p5::createBall()
}

import checkAttrInScript from "./attribute.mjs"; // data-ball-auto-import
checkAttrInScript('ballAutoImport') && exposeBallConstructors();
