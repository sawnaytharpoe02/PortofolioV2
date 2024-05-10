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
        white: "#F5F0EC",
        dark: "#222222",
        grey: "#4e4b4b",
      },
      fontSize: {
        dynamic: "clamp(4rem, 30vw, 12rem)",
      },
    },
  },
  plugins: [],
};
