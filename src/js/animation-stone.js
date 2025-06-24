const wrapper = document.querySelector('.stone-wrapper');
let step = 0;

function animateStones() {
  step += 1;

  const positions = [
    `top 30px  left calc(50% + ${180 + Math.cos(step / 180) * 300}px)`,
    `top 460px left calc(50% + 151px)`,
    ` top 370px left calc(50% - 129px)`,
    ` top 250px left calc(50% - 20px)`,
    `top 370px left calc(50% + 468px)`,
    `top 455px left calc(50% + 320px)`,
    ` top 520px left calc(50% + 452px)`,
    `top ${930 + Math.sin(step / 220) * 280}px left calc(50% - 
      190px)`,
    `top ${940 + Math.sin(step / 180) * 300}px left calc(50% + ${
      190 + Math.cos(step / 22) * 3
    }px)`,
    ` top 1135px left calc(50% + 550px)`,
    ` top 1277px left calc(50% - 245px)`,
    `top 1325px  left  calc(50% + ${140 + Math.cos(step / 180) * 320}px)`,
    `top 1295px left calc(50% + 270px)`,
  ];

  wrapper.style.backgroundPosition = positions.join(', ');
  requestAnimationFrame(animateStones);
}

animateStones();
