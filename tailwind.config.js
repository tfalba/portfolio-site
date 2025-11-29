const withOpacityValue = (variable) => `rgb(var(${variable}) / <alpha-value>)`;

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        heading: ["Cardo", "serif"],
        body: ["Didact Gothic", "sans-serif"],
      },
      colors: {
        surface: withOpacityValue("--color-surface"),
        "surface-muted": withOpacityValue("--color-surface-muted"),
        "surface-card": withOpacityValue("--color-surface-card"),
        "surface-elevated": withOpacityValue("--color-surface-elevated"),
        text: withOpacityValue("--color-text"),
        "text-muted": withOpacityValue("--color-text-muted"),
        border: withOpacityValue("--color-border"),
        accent: withOpacityValue("--color-accent"),
        "accent-soft": withOpacityValue("--color-accent-soft"),
        "accent-strong": withOpacityValue("--color-accent-strong"),
        brand: {
          black: "#000000",
          charcoal: "#343434",
          // red: "#DD4532",
          red: "#673AB7",
          // coral: "#E86E5F",
          coral: "#3f51b5",
          blue: "#1B4965",
          green: "#1F6F4E",
          // gold: "#C48F2D",
          gold: "#673ab7",
          light: "#F1F1F2",
          white: "#FEFEFE",
        },
        lightMode: {
          lavender: "#857BAC",
          mint: "#96D0CF",
          blush: "#EABBB9",
          mist: "#F4F2F3",
          butter: "#FDF4C3",
          white: "#FEFEFE",
        }
      },

    },
  },
  plugins: [],
};

