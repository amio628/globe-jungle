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
        brand: {
          orange: "#e67e22",
          "orange-deep": "#c4621a",
          "orange-soft": "#FFF3E6",
          accent: "#FF8C00",
          beige: "#F9F7F2",
          "beige-soft": "#F4F1EB",
          "beige-border": "#E5E0D5",
          brown: "#2D1B0E",
          "brown-muted": "#6B5744",
        },
      },
      borderRadius: {
        card: "24px",
        "card-lg": "32px",
      },
      boxShadow: {
        lift: "0 12px 32px -12px rgba(45, 27, 14, 0.12)",
      },
      fontFamily: {
        sans: [
          '"Inter"',
          '"Noto Sans JP"',
          '"Hiragino Kaku Gothic ProN"',
          '"Yu Gothic"',
          "system-ui",
          "sans-serif",
        ],
        heading: [
          '"Poppins"',
          '"Zen Maru Gothic"',
          "sans-serif",
        ],
      },
    },
  },

  plugins: [],
};
