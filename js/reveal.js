/*
 * reveal.js — lightweight scroll-reveal (Phase 5).
 *
 * Elements tagged with the `.reveal` class start hidden (opacity:0,
 * translateY(40px)) via styles.css.  As soon as they intersect the
 * viewport this script adds the `.show` class, which triggers a
 * CSS transition to fade + rise them into place.
 *
 * Respects `prefers-reduced-motion` and gracefully degrades on
 * browsers without IntersectionObserver.
 */
(function () {
  if (typeof window === "undefined" || typeof document === "undefined") return;

  var start = function () {
    var targets = document.querySelectorAll(".reveal");
    if (!targets.length) return;

    // Reduced-motion users: skip the animation and show everything immediately.
    var reduceMotion =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion || !("IntersectionObserver" in window)) {
      targets.forEach(function (el) {
        el.classList.add("show");
      });
      return;
    }

    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("show");
          io.unobserve(entry.target);
        });
      },
      {
        // Trigger slightly before the element fully enters the viewport
        // so the fade feels responsive rather than delayed.
        threshold: 0.12,
        rootMargin: "0px 0px -8% 0px",
      }
    );

    targets.forEach(function (el) {
      io.observe(el);
    });
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start);
  } else {
    start();
  }
})();
