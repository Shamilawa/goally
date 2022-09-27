/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    colors: {
      primary: "#606060",
      secondary: "rgba(96, 96, 96, 0.6)",
      grenn: "#06856c",
      dark_green: "#036552",
      light_blue: "#F1F8FF",
      white: "#ffffff",
      btn_grey: "rgba(210, 210, 210, 0.25)",
      red: "rgb(239 68 68)"
    },
    extend: {
      width: {
        '380px': '380px',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      },
    },
  },
  plugins: [],
}