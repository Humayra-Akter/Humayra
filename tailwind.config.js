/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#660064",
          secondary: "#FFF",
        },
      },
      {
        dark: {
          primary: "#800000",
          secondary: "#FFD700",
        },
      },
    ],
  },
};
