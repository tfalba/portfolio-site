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
          black: "#2a2e30",
          charcoal: "#345c72",
          red: "#f46530",
          coral: "#ff9e7a",
          blue: "#345c72",
          green: "#d4edf4",
          gold: "#ff9e7a",
          light: "#ffffff",
          white: "#ffffff",
        },
        project: {
          teal: "#2abbab",
          orange: "#f97216",
          green: "#92d858",
          pink: "#d48e8e",
          taupe: "#d1c8b4",
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
