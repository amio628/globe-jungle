/* ============================================================
 * stats.js — Animated count-up for stat numbers
 *
 * Usage: add data-count="12800" to any element.
 * The element's text is animated from 0 to the target
 * when it scrolls into view (via IntersectionObserver).
 * ============================================================ */

(function () {
  const DURATION = 1800; // ms
  const formatter = new Intl.NumberFormat("en-US");

  function easeOutCubic(t) {
    return 1 - Math.pow(1 - t, 3);
  }

  function animate(el, target) {
    const startTime = performance.now();
    function tick(now) {
      const progress = Math.min(1, (now - startTime) / DURATION);
      const value = Math.round(target * easeOutCubic(progress));
      el.textContent = formatter.format(value);
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  function init() {
    const nodes = document.querySelectorAll("[data-count]");
    if (!nodes.length) return;

    // Reduced motion: skip animation, show final value
    const prefersReduced = window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced || !("IntersectionObserver" in window)) {
      nodes.forEach((n) => {
        const t = parseInt(n.dataset.count, 10) || 0;
        n.textContent = formatter.format(t);
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          if (el.dataset.counted) return;
          el.dataset.counted = "1";
          const target = parseInt(el.dataset.count, 10) || 0;
          animate(el, target);
          observer.unobserve(el);
        });
      },
      { threshold: 0.4 }
    );
    nodes.forEach((n) => observer.observe(n));
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
