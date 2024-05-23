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
        cursor: "#C7B7A3",
        skiny: "#ebdcc9",
      },
      fontSize: {
        dynamic: "clamp(4rem, 30vw, 12rem)",
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(to bottom, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9) 47%, transparent, transparent 47%, transparent, transparent 55%, rgba(255, 255, 255, 0.9) 50%, rgba(255, 255, 255, 0.9))",
      },
      clipPath: {
        "custom-polygon": "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      },
    },
  },
  plugins: [],
};
