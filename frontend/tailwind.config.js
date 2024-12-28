/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
      extend: {
        fontFamily: {
          lora: ['Lora', 'serif'], 
          roboto: ['Roboto', 'sans-serif'],
        },
        colors: {
          customRed: '#FF5733',
          customBlack: '#171718',
          customGray: '#f9ced8',
          customGold: '#FFD700',
          customSilver: '#C0C0C0',
          customWhite: '#e0d2d5',
        },
      },
  },
  plugins: [],
};