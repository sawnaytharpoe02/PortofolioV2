/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        anderson: ["Anderson Grotesk", "sans-serif"],
        mango: ["Mango Grotesque", "sans-serif"],
        dmsan: ["DM Sans", "sans-serif"],
      },
      colors: {
        white: "#f9f7f7",
        dark: "#110a08",
        grey: "#4e4b4b",
      },
      fontSize: {
        dynamic: "clamp(4rem, 30vw, 12rem)",
      },
    },
  },
  plugins: [],
};
