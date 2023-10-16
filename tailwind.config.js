/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors :{
        primary: 'rgba(1,200,165,255)',
        dark: 'rgba(15,14,14,255)'
      }
    },
  },
  plugins: [],
}
