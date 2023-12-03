import type { Config } from 'tailwindcss';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory: 
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'green': "#2E5955",
        'forest': '#112626',
        'cyan': '#609e99',
        'white': {
          100: '#fcf4f1',
          200: '#f7f0ed',
          300: '#e8e1df'
        },
        'dark': '#2a302b',
        'gold': '#f2ab3c',

      }
    },
  },
  plugins: [],
};
