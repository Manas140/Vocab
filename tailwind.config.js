/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'bg': "var(--bg)",
      'fg': "var(--fg)",
      'al': "var(--al)",
      'bg2': "var(--bg2)",
      'hw': "var(--hw)",
      'fg2': "var(--fg2)",
      'fg3': "var(--fg3)",
      'ov': "var(--ov)",
      'br': 'var(--br)',
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
        'gradient-loading': 'linear-gradient(to bottom right, var(--grad-1), var(--grad-2))',
      },
    },
  },
  plugins: [],
}
