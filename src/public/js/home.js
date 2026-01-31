console.log("Home frontend javascript file");

function fitElementToParent(el, padding) {
  let timeout = null;

  function resize() {
    if (timeout) clearTimeout(timeout);
    anime.set(el, { scale: 1 });
    let pad = padding || 0,
      parentEl = el.parentNode,
      elOffsetWidth = el.offsetWidth - pad,
      parentOffsetWidth = parentEl.offsetWidth,
      ratio = parentOffsetWidth / elOffsetWidth;
    timeout = setTimeout(anime.set(el, { scale: ratio }), 10);
  }

  resize();
  window.addEventListener("resize", resize);
}

(function () {
  const medicalEl = document.querySelector(".medical-animation");
  if (!medicalEl) return;

  fitElementToParent(medicalEl);

  const crossVertical = medicalEl.querySelector(".cross-vertical");
  const crossHorizontal = medicalEl.querySelector(".cross-horizontal");
  const heartbeatLine = medicalEl.querySelector(".heartbeat-line");
  const pills = medicalEl.querySelectorAll(".pill");

  // Tibbiy xoch nafas olish animatsiyasi (pulse effect)
  const crossPulseAnimation = anime({
    targets: [crossVertical, crossHorizontal],
    scale: [1, 1.05, 1],
    opacity: [0.9, 1, 0.9],
    duration: 2500,
    easing: "easeInOutSine",
    loop: true,
    direction: "alternate",
  });

  // Yurak urishi chizig'ini chizish animatsiyasi
  const heartbeatPathLength = heartbeatLine.getTotalLength?.() || 600;
  heartbeatLine.setAttribute("stroke-dasharray", heartbeatPathLength);

  const heartbeatAnimation = anime({
    targets: heartbeatLine,
    strokeDashoffset: [heartbeatPathLength, 0],
    duration: 2000,
    easing: "easeInOutQuad",
    loop: true,
    direction: "alternate",
    delay: 500,
  });

  // Tabletka (pill) suzuvchi animatsiyasi
  const pillAnimation = anime({
    targets: pills,
    translateY: [-8, 8, -8],
    opacity: [0.5, 1, 0.5],
    duration: 3000,
    easing: "easeInOutSine",
    loop: true,
    delay: anime.stagger(400),
  });

  function init() {
    crossPulseAnimation.play();
    heartbeatAnimation.play();
    pillAnimation.play();
  }

  init();
})();
