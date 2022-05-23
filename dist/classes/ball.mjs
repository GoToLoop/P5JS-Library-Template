/**
 * P5js Library Template (v2.0.1)
 * GoToLoop (2022-Apr-08)
 *
 * https://Discourse.Processing.org/t/
 * g4js-developing-a-new-gui-library-for-p5-js/36116/8
 *
 * https://GitHub.com/GoToLoop/P5JS-Library-Template
 * https://GoToLoop.GitHub.io/P5JS-Library-Template
*/
var Ball_1;
import InjectToP5js from "../decorators/p5jsClassInjection.mjs";
let Ball = Ball_1 = class Ball {
    p;
    static VEL = 2;
    static MIN_RAD = 5;
    static MAX_RAD = 30;
    static ALL_COLORS = 0x1000;
    pos;
    vel;
    rad = 0;
    c = null;
    constructor(p = globalThis.p5?.instance) {
        this.p = p;
        this.pos = p.createVector();
        this.vel = p.createVector();
        this.reset();
    }
    reset() {
        const { p, pos, vel } = this, { VEL, MIN_RAD, MAX_RAD, ALL_COLORS } = Ball_1, r = this.rad = p.round(p.random(MIN_RAD, MAX_RAD));
        pos.set(p.random(r, p.width - r), p.random(r, p.height - r));
        vel.set(p.random(-VEL, VEL), p.random(-VEL, VEL));
        this.c = p.color('#' + p.hex(~~p.random(ALL_COLORS), 3));
        return this;
    }
    update() {
        const { p: { width: w, height: h }, pos, vel, rad } = this;
        pos.add(vel);
        if (pos.x > w - rad || pos.x < rad)
            vel.x *= -1;
        if (pos.y > h - rad || pos.y < rad)
            vel.y *= -1;
        return this;
    }
    display() {
        this.p.fill(this.c).circle(this.pos.x, this.pos.y, this.rad << 1);
        return this;
    }
};
Ball = Ball_1 = __decorate([
    InjectToP5js
], Ball);
export default Ball;
