/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        secondary: "#0BBF4A",
        hover_primary: "#71318c",
        primary:"#482059"
      },
      fontFamily:{
        Comfortaa: ['Comfortaa', 'cursive']
      }
    },
  },
  plugins: [],
}
