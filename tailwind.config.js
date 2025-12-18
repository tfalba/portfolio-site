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
          white: "#ffffff",
        },
        project: {
          gold: "#ffeb3b",
          teal: "#2abbab",
          orange: "#f97216",
          green: "#92d858",
          pink: "#d48e8e",
          taupe: "#d1c8b4",
        }
      },
      keyframes: {
        "hero-slide": {
          "0%": { opacity: "0", transform: "translateX(60px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "hero-popover": {
          "0%": { opacity: "0", transform: "translateY(20px) scale(0.96)" },
          "100%": { opacity: "1", transform: "translateY(0) scale(1)" },
        },
      },
      animation: {
        "hero-slide": "hero-slide 0.8s ease forwards",
        "hero-popover": "hero-popover 0.4s ease forwards",
      },

    },
  },
  plugins: [],
};
