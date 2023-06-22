/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {

    colors: {
      'black': "#101010",
      'gray-dark': '#181818',
      'gray-light': '#353535',
      'gray': '#222222',
      'white': "#d8d3d3",
      'red': '#B66467',
      'blue': '#8AA6A2',
    },
    extend: {
      keyframes: {
        like: {
          '0%': { scale: '1', opacity: '0' },
          '50%': { scale: '1.25' },
          '100%': { scale: '1', opacity: '1'}
        },
        fade: {
          '0%': { opacity: '1', transform: 'TranslateY(15px)' },
          '100%': { opacity: '1.25', transform: 'TranslateY(0)' },
        }
      },
      animation: {
        'like': 'like 400ms ease forwards',
        'fade': 'fade 0.5s ease forwards',
      },
      backgroundImage: {
        'gradient-loading': 'linear-gradient(to bottom right, #181818, #101010)',
      },
    },
  },
  plugins: [],
}
