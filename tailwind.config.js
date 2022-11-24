/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: "url('/src/asstes/banner-0.jpg')"
    },
  },
  plugins: [require("daisyui")],
}
