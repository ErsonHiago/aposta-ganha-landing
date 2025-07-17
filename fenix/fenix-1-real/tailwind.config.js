
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'dharma': ['DharmaGothicE', 'Impact', 'Arial Black', 'sans-serif'],
        'exo': ['Exo', 'Arial', sans-serif],
        'roboto': ['Roboto', 'Arial', 'sans-serif'],
      },
      colors: {
        'orange-primary': 'hsl(25, 100%, 55%)',
        'orange-secondary': 'hsl(20, 100%, 60%)',
        'orange-vibrant': 'hsl(22, 100%, 65%)',
      },
    },
  },
  plugins: [],
}
