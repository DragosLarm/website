/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./content/**/*.{html,js}", "./layouts/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    colors: {
      dragos: {
        100: "#f8f9fa",
        200: "#e9ecee",
        300: "#dce0e4",
        400: "#cfd4d9",
        500: "#bfc6cd",
        600: "#adb5bd",
        700: "#939ba4",
        800: "#727981",
        900: "#51575e",
        1000: "#353a3f",
        1100: "#212529",
        blue: "#1862ab",
        green: "#216f30",
        orange: "#9f4700",
      },
    },
    extend: {},
  },
  plugins: [],
};
