/** @type {import('tailwindcss').Config} */
module.exports = {
  // Scan all static HTML + JS for Tailwind class usage so unused
  // utilities are tree-shaken out of the final bundle.
  content: [
    "./index.html",
    "./donate.html",
    "./js/**/*.js",
  ],

  // Preflight (Tailwind's CSS reset) is DISABLED so it doesn't clobber
  // the existing hand-written styles.css. We're using Tailwind as an
  // additive utility layer on top of the current design.
  corePlugins: {
    preflight: false,
  },

  theme: {
    extend: {
      colors: {
        // Brand palette — keep in sync with the CSS variables in
        // styles.css (:root).  Added `accent` (#f0ad4e) from the
        // RiseHand / reference-design direction.
        brand: {
          orange: "#e67e22",
          "orange-deep": "#c4621a",
          "orange-soft": "#fbe8d3",
          accent: "#f0ad4e",
          beige: "#fdf5e6",
          "beige-soft": "#fbf1dc",
          "beige-border": "#e8dcc2",
          brown: "#4a2c1d",
          "brown-muted": "#8b6f5c",
        },
      },
      borderRadius: {
        // Card radii targeted by Phase 3 (24–32px).
        card: "24px",
        "card-lg": "32px",
      },
      boxShadow: {
        // Soft lift for hover-animated cards (Phase 4).
        lift: "0 18px 40px -18px rgba(74, 44, 29, 0.25)",
      },
      fontFamily: {
        sans: [
          '"Noto Sans JP"',
          '"Hiragino Kaku Gothic ProN"',
          '"Yu Gothic"',
          "system-ui",
          "sans-serif",
        ],
      },
    },
  },

  plugins: [],
};
