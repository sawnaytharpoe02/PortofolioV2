/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        anderson: ["Anderson Grotesk", "sans-serif"],
        mango: ["Mango Grotesque", "sans-serif"],
      },
      colors: {
        white: "#fff8ff",
        dark: "#2a292b",
      },
    },
  },
  plugins: [],
};
