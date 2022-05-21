/**
 * Bouncing Colorful Balls [Instance Mode] (v2.2.0)
 * AllOneString & GoToLoop (2016-Jun-28)
 *
 * Discourse.Processing.org/t/make-class-get-all-functions-of-p5-js/12558/2
 * Bl.ocks.org/GoSubRoutine/60b154e52336f7fee7c5f1fe817ceb22
 *
 * Forum.Processing.org/two/discussion/17306/multiple-canvases-on-one-page#Item_12
 * CodePen.io/GoSubRoutine/pen/KaerGb/right/?editors=101
*/

'use strict';

(async () => {
  const {
    default: Ball
  } = await import("../../../dist/classes/ball.mjs");

  new p5(p => {
    const NUM = 15, balls = Array(NUM).fill();
    var bg;

    p.setup = function() {
      p.createCanvas(700, 700).mousePressed(reset);
      p.noStroke();

      bg = p.color(Array.from({ length: 3 }, () => ~~p.random(0xd0, 0x100)));

      for (var i = 0; i < NUM; balls[i++] = new Ball(p));    // instantiation via new
      for (var i = 0; i < NUM; balls[i++] = p.createBall()); // instantiation via method
    };

    p.draw = function() {
      p.background(bg);
      for (const b of balls)  b.display().update();
    };

    function reset() {
      for (var i = 0; i < 3; bg.levels[i++] = ~~p.random(0xd0, 0o400));
      for (const b of balls)  b.reset();
    }
  });
})();
