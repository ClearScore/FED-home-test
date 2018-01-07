/*
  Animate Utility

  Example:

  const start = 339.292;
  animate({
    duration: 2000,
    timing: bounceEaseOut,
    draw: (progress) => {
      console.log(start - ((start * value * progress) / max)));
    }
  });
*/
function animate({ timing, draw, duration }) {
  const start = performance.now();

  requestAnimationFrame(function animateRaf(time) {
    // timeFraction goes from 0 to 1
    let timeFraction = (time - start) / duration;
    if (timeFraction > 1) timeFraction = 1;

    // calculate the current animation state
    const progress = timing(timeFraction);

    draw(progress); // draw it

    if (timeFraction < 1) {
      requestAnimationFrame(animateRaf);
    }
  });
}

function makeEaseOut(timing) {
  return (timeFraction) => (1 - timing(1 - timeFraction));
}

function bounce(timeFraction) {
  for (let start = 0, end = 1; ; start += end, end /= 2) {
    if (timeFraction >= (7 - (4 * start)) / 11) {
      return -(((11 - (6 * start) - (11 * timeFraction)) / 4) ** 2) + (end ** 2);
    }
  }
}

module.exports = animate;
module.exports.bounceEaseOut = makeEaseOut(bounce);
module.exports.bounce = bounce;
