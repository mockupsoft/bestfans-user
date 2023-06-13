/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          base: "hsl(203,89%, 53%)",
          dark: "hsl(203,89%, 46%)",
          light: "hsl(203,89%, 90%)",
        },
        gray: {
          dark: "#657786",
          light: "#AAB8C2",
          extraLight: "#E1E8ED",
          lightest: "#eee",
        },
          black: "#14171A",
        },
    },
  },
  plugins: [],
};