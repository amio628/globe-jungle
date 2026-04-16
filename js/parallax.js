/*
 * parallax.js — lightweight bubble parallax (Phase 1).
 *
 * Applies a subtle Y-axis translate to every `.bubble` element based on
 * the viewport scroll position.  Speed is randomized per element so the
 * decorative circles drift at slightly different rates.
 *
 * - Respects `prefers-reduced-motion`
 * - Uses `requestAnimationFrame` throttling so scroll never triggers
 *   more than one transform update per frame
 * - Falls back to no-op on browsers without rAF
 */
(function () {
  if (typeof window === "undefined" || typeof document === "undefined") return;

  var reduceMotion =
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduceMotion) return;
  if (!("requestAnimationFrame" in window)) return;

  var start = function () {
    var bubbles = Array.prototype.slice.call(
      document.querySelectorAll(".bubble")
    );
    if (!bubbles.length) return;

    // Assign each bubble a random speed factor between 0.05 and 0.18.
    // Lower = slower parallax, higher = more movement.
    var items = bubbles.map(function (el) {
      var speed = 0.05 + Math.random() * 0.13;
      // Alternate direction so half drift up, half drift down.
      if (Math.random() < 0.5) speed = -speed;
      return { el: el, speed: speed };
    });

    var ticking = false;
    var update = function () {
      var y = window.pageYOffset || document.documentElement.scrollTop || 0;
      for (var i = 0; i < items.length; i++) {
        var it = items[i];
        // Only move bubbles whose section is near the viewport.
        var rect = it.el.getBoundingClientRect();
        if (rect.bottom < -200 || rect.top > window.innerHeight + 200) continue;
        var offset = (y * it.speed).toFixed(1);
        it.el.style.transform = "translate3d(0, " + offset + "px, 0)";
      }
      ticking = false;
    };

    var onScroll = function () {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(update);
    };

    // Prime once so the initial positions are correct after load.
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start);
  } else {
    start();
  }
})();
