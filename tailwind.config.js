/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: "url('/src/asstes/banner-0.jpg')",
      authBackground: "url('/src/asstes/authentication.jpg')"
    },
  },
  plugins: [require("daisyui")],
}
