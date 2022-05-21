/**
 * Bouncing Colorful Balls [Global Mode] (v2.2.0)
 * AllOneString & GoToLoop (2016-Jun-28)
 *
 * Discourse.Processing.org/t/make-class-get-all-functions-of-p5-js/12558/2
 * Bl.ocks.org/GoSubRoutine/60b154e52336f7fee7c5f1fe817ceb22
 *
 * Forum.Processing.org/two/discussion/17306/multiple-canvases-on-one-page#Item_12
 * CodePen.io/GoSubRoutine/pen/KaerGb/right/?editors=101
*/

import "../../../dist/classes/ball.mjs";

const NUM = 15, balls = Array(NUM).fill();
var bg;

globalThis.setup = function() {
  createCanvas(700, 700).mousePressed(reset);
  noStroke();

  bg = color(Array.from({ length: 3 }, () => ~~random(0xd0, 0x100)));

  for (var i = 0; i < NUM; balls[i++] = createBall()); // instantiation via method
  for (var i = 0; i < NUM; balls[i++] = new Ball);     // instantiation via new
}

globalThis.draw = function() {
  background(bg);
  for (const b of balls)  b.display().update();
}

function reset() {
  for (var i = 0; i < 3; bg.levels[i++] = ~~random(0xd0, 0o400));
  for (const b of balls)  b.reset();
}
