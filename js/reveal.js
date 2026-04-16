/*
 * reveal.js — lightweight scroll-reveal with staggered child animations.
 *
 * Elements tagged with the `.reveal` class start hidden (opacity:0,
 * translateY(40px)) via styles.css.  As soon as they intersect the
 * viewport this script adds the `.show` class, which triggers a
 * CSS transition to fade + rise them into place.
 *
 * Child elements with `.stagger-item` animate in one-by-one with
 * incrementing transition-delay for a cascading effect.
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
        var children = el.querySelectorAll(".stagger-item");
        children.forEach(function (child) {
          child.classList.add("show");
        });
      });
      return;
    }

    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("show");

          // Stagger children with incrementing delay
          var children = entry.target.querySelectorAll(".stagger-item");
          var count = children.length;
          // Use shorter delay when there are many children
          var delay = count > 5 ? 0.08 : 0.12;

          children.forEach(function (child, index) {
            child.style.transitionDelay = (index * delay) + "s";
            requestAnimationFrame(function () {
              child.classList.add("show");
            });
          });

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
