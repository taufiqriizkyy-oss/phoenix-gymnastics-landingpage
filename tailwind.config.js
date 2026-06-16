/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        phoenix: {
          50:  '#FFF0F7',
          100: '#FFE0F0',
          200: '#FFB8D2',
          300: '#FF8FBB',
          400: '#FF4DA6',
          500: '#FF1493',
          600: '#E6007A',
          700: '#B30060',
          800: '#800047',
          900: '#4D002B',
        },
      },
      fontFamily: {
        rajdhani: ['Rajdhani', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
