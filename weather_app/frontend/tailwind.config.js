/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        customBlue: '#2f3d86',
        customBlue_light: '#218096',
        customBlue_dark: '#184272',
      },
      backgroundImage: {
      }
    },
  },
  plugins: [],
}

