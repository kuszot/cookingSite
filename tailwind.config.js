/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'black': "#333333",
        'gray': "#F0F0F0",
      },
      fontFamily: {
        oswald: 'Oswald, sans-serif',
        roboto: 'Roboto, sans-serif',
        noto: 'Noto Serif, serif',
      },
    },
  },
  plugins: [],
}