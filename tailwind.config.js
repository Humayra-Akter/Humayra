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
          primary: "#800000",
          secondary: "#FFF",
          accent: "#782e2e",
        },
      },
      {
        dark: {
          primary: "#660064",
          secondary: "#FFD700",
          accent: "#66fcf1",
        },
      },
    ],
  },
};
