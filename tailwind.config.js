/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'bg': "#101010",
      'fg': "#e8e3e3",
      'al': "#181818",
      'bg2': "#202020",
      'hw': "#282828",
      'fg2': "#e8e3e380",
      'fg3': "#cccccc",
      'ov': "#101010bf",
      'br': '#e8e3e30f',
    },
    extend: {
      keyframes: {
        like: {
          '0%': { scale: '1', opacity: '0' },
          '50%': { scale: '1.25' },
          '100%': { scale: '1', opacity: '1'}
        },
      },
      animation: {
        'like': 'like 400ms ease forwards',
      },
      backgroundImage: {
        'gradient-loading': 'linear-gradient(to bottom right, #1a1a1a, #181818)',
      },
    },
  },
  plugins: [],
}
