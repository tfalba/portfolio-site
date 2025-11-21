/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Cardo", "serif"],
        body: ["Didact Gothic", "sans-serif"],
      },
      colors: {
        brand: {
          black: "#000000",
          charcoal: "#343434",
          red: "#DD4532",
          coral: "#E86E5F",
          blue: "#1B4965",
          green: "#1F6F4E",
          gold: "#C48F2D",
          light: "#F1F1F2",
          white: "#FEFEFE",
        },
      },
    },
  },
  plugins: [],
};


