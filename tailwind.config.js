/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        yellow: "hsl(47, 88%, 63%)",
      },
      boxShadow: {
        solid: "4px 4px 0px black",
      },
    },
  },
  plugins: [],
};
