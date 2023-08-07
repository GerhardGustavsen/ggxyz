/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        accent: '#8000ff',
        fg: '#bbbbbb',
        bgDark: '#222222',
        bgLight: '#333333',
      },
      spacing: {
        sbsm: '70px',
        sbmd: '80px',
        sblg: '90px',
        sbxl: '400px',
      },
    },
  },
  plugins: [],
};
