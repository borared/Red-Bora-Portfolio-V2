/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        liquid: {
          "0%": { transform: "scale(1)" },
          "40%": { transform: "scale(1.15,0.9)" },
          "60%": { transform: "scale(0.95,1.1)" },
          "100%": { transform: "scale(1.05)" },
        },
      },
      animation: {
        liquid: "liquid 0.45s ease-out forwards",
      },
    },
  },
  plugins: [],
};