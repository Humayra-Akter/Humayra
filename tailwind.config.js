/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 5s linear infinite",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#660064",
          secondary: "#FFF",
          accent: "#a655a4",
        },
      },
      {
        dark: {
          primary: "#092E20",
          secondary: "#FFD700",
          accent: "#66fcf1",
        },
      },
    ],
  },
};
