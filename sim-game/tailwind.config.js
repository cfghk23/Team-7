/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "primary": "#3bb6bf",
        "secondary": "#b1dacc",
      },
      backgroundImage : {
        "market-background" : "url('./assets/supermarket.png')",
        "town-background": "url('./assets/town_img.jpg')",
      }
    },
  },
  plugins: [],
}

