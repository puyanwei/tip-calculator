/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "375px",
      lg: "1440px",
    },
    extend: {
      colors: {
        cyan: "#26c0ab",
        "dark-cyan": "#00494d",
        "gray-cyan": {
          50: "#f4fafa",
          100: "#c5e4e7",
          300: "#7f9c9f",
          500: "#5e7a7d",
        },
      },
    },
  },
  plugins: [],
}
