/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Roboto, sans-serif'
      },
      fontSize: {
        heading: 24,
      },
      colors: {
        brand: {
          'primary': '#eff0f4',
          'primary-opacity-50': '#eff0f450',
          'dark': '#112025',
          'dark-opacity-50': '#11202550',
          'yellow': '#fdc161',
          'yellow-opacity-75': '#fdc16175',
          'yellow-opacity-50': '#fdc16150',
          'secundary': '#16bac6',
          'secundary-opacity-50': '#16bac650',
          'tertiary': '#195f6b',
          'tertiary-opacity-50': '#195f6b50'
        }
      },

      backgroundImage: {
        app: 'url(/BG-effects.png)'
      }
    },
  },
  plugins: [],
}
