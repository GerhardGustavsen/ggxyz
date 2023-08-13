/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx,astro}'],
  theme: {
    screens: {
      sm: '640px',
      md: '875px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        accent: '#8000ff',
        fgDark: '#dddddd',
        fgLight: '#eeeeee',
        bgDark: '#222222',
        bgLight: '#333333',
      },
      spacing: {
        sbmd: '200px',
        sblg: '250px',
        sbxl: '300px',
        sb2xl: '400px',
      },
    },
  },
  plugins: [],
};
