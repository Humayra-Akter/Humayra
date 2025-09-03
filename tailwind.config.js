/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 5s linear infinite",
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "#000",
        foreground: "#fff",
        primary: {
          DEFAULT: "#b3f2b1",
          // DEFAULT: "#8230FF",
          foreground: "#000",
        },
        secondary: {
          DEFAULT: "#0d2614",
          // DEFAULT: "#FFD700",
          foreground: "#000",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    // themes: [
    //   {
    //     light: {
    //       primary: "#0e1b15",
    //       secondary: "#FFD700",
    //       accent: "#a655a4",
    //     },
    //   },
    //   {
    //     dark: {
    //       primary: "#092E20",
    //       secondary: "#FFD700",
    //       accent: "#66fcf1",
    //     },
    //   },
    // ],
  },
};

