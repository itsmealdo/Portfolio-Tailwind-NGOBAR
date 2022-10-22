/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#FA4D56',
        dark: '#0f172a',
        secondary: '#64748b',
      },
      aspectRatio: {
        '4/3': '4 / 3',
      },
      screens: {
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
}
