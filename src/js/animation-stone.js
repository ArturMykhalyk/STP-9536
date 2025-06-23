const wrapper = document.querySelector('.stone-wrapper');
let step = 0;

function animateStones() {
  step += 1.5;

  const positions = [
    `top ${40 + Math.sin(step / 20) * 10}px left ${
      50 + Math.cos(step / 25) * 1
    }%`,
    `top ${460 + Math.cos(step / 25) * 4}px left calc(50% + ${
      151 + Math.sin(step / 30) * 30
    }px)`,
    `top ${370 + Math.sin(step / 23) * 6}px left calc(50% - ${
      129 + Math.cos(step / 28) * 4
    }px)`,
    `top ${250 + Math.cos(step / 19) * 3}px left calc(50% - ${
      20 + Math.sin(step / 22) * 3
    }px)`,
    `top ${370 + Math.sin(step / 22) * 5}px left calc(50% + ${
      468 + Math.cos(step / 27) * 4
    }px)`,
    `top ${455 + Math.cos(step / 26) * 2}px left calc(50% + ${
      320 + Math.sin(step / 21) * 3
    }px)`,
    `top ${520 + Math.sin(step / 21) * 4}px left calc(50% + ${
      452 + Math.cos(step / 24) * 5
    }px)`,
    `top ${630 + Math.cos(step / 24) * 25}px left calc(50% - ${
      190 + Math.sin(step / 23) * 2
    }px)`,
    `top ${850 + Math.sin(step / 180) * 200}px left calc(50% + ${
      190 + Math.cos(step / 22) * 3
    }px)`,
    `top ${1135 + Math.cos(step / 20) * 6}px left calc(50% + ${
      550 + Math.sin(step / 20) * 4
    }px)`,
    `top ${1277 + Math.sin(step / 22) * 4}px left calc(50% - ${
      245 + Math.cos(step / 19) * 4
    }px)`,
    `top ${1305 + Math.cos(step / 23) * 5}px left calc(50% - ${
      125 + Math.sin(step / 25) * 3
    }px)`,
    `top ${1295 + Math.sin(step / 19) * 6}px left calc(50% + ${
      270 + Math.cos(step / 21) * 4
    }px)`,
  ];

  wrapper.style.backgroundPosition = positions.join(', ');
  requestAnimationFrame(animateStones);
}

animateStones();
