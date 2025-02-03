import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */

export default {
  darkMode: ['class', '[data-theme="dark"]'],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["light", "dark"], // Menambahkan tema light dan dark
  },
};
