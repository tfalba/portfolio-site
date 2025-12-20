const palette = {
  ocean: "#07a5c3",
  gold: "#f4b324",
  sand: "#f6e7d8",
  graphite: "#303030",
  ember: "#f14902",
  ink: "#1c191a",
};

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Archivo", "sans-serif"],
        body: ["Open Sans", "sans-serif"],
      },
      colors: {
        brand: palette,
        canvas: palette.sand,
        "canvas-muted": "#fff8f3",
        "panel": "#faf3ea",
        accent: palette.ocean,
        ember: palette.ember,
        graphite: palette.graphite,
        ink: palette.ink,
      },
      keyframes: {
        "float-up": {
          "0%": { opacity: "0", transform: "translateY(40px) scale(0.98)" },
          "50%": { opacity: "0.9" },
          "100%": { opacity: "1", transform: "translateY(0) scale(1)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "float-up": "float-up 0.9s ease forwards",
        "fade-in": "fade-in 0.6s ease forwards",
      },

    },
  },
  plugins: [],
};
