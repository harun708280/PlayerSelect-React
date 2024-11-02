/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bg-image': "url('./src/Component/Header/bg-shadow.png')",
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}