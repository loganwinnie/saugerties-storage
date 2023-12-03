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
          100: '#f7fbfb',
          200: '#addce6',
          300: '#DEE1E1'
        },
        'dark': '#2d3131',
        'accent': {
          100: '#009271',
          200: '#2f8d56'
        },

      }
    },
  },
  plugins: [],
};
