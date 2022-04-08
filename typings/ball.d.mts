/**
 * P5js Library Template (v1.0.0)
 * GoToLoop (2022-Apr-08)
 *
 * https://Discourse.Processing.org/t/g4js-developing-a-new-gui-library-for-p5-js/36116/8
 *
 * https://GitHub.com/GoToLoop/P5JS-Library-Template
 * https://GoToLoop.GitHub.io/P5JS-Library-Template
*/
import type * as p5 from "p5";
export default class Ball {
    p: p5;
    static readonly VEL = 2;
    static readonly MIN_RAD = 5;
    static readonly MAX_RAD = 30;
    static readonly ALL_COLORS = 4096;
    pos: p5.Vector;
    vel: p5.Vector;
    rad: number;
    c: p5.Color;
    constructor(p?: p5);
    reset(): this;
    update(): this;
    display(): this;
}
export declare function exposeBallConstructors(): boolean;
