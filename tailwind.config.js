/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#000000",
        white: "#ffffff",
        gray: {
          900: "#111111",
          800: "#1a1a1a",
          700: "#2d2d2d",
          600: "#404040",
          500: "#737373",
          400: "#a3a3a3",
          300: "#d4d4d4",
        },
        yellow: {
          400: "#facc15",
          300: "#fde047",
        },
        gold: {
          500: "#fbbf24",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      fontSize: {
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
        "5xl": "3rem",
        "6xl": "3.75rem",
        "7xl": "4.5rem",
      },
    },
  },
  plugins: [],
};
