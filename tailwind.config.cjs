/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        secondary: "#6f49c9",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundColor: {
        // Light theme background color
        "light-bg": "#ffffff", // Or any other light background color
        // Dark theme background color
        "dark-bg": "#00040f", // Or any other dark background color
      },
    },
    screens: {
      mb: "320px",
      xxs: "400px",
      xms: "450px",
      xs: "480px",
      xns: "568px",
      ss: "620px",
      sms: "690px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
