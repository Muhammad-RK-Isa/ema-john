/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{jsx, js}" ],
  theme: {
    extend: {
      colors: {
        'accent': "#1C2B35",
        'btn-primary': "#FF9900",
        'btn-secondary': "#995C00",
        'header': "#2A414F"
      }
    },
  },
  plugins: [ require( '@tailwindcss/line-clamp' ) ],
}
