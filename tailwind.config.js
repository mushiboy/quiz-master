/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Josefin Slab", "sans-serif"],
        handwriting: ["Cabin Sketch", "cursive"],
        quiz: ["Comforter Brush", "cursive"],
      },
      colors: {
        b1: "#222831",
        b2: "#393E46",
        orange: "#D65A31",
        w: "#EEEEEE",
      },
    },
  },
  plugins: [],
};
