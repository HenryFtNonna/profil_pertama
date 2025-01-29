import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Poppins': ['Poppins']
      }
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["light", "dark"], // Menambahkan tema light dan dark
  },
};
