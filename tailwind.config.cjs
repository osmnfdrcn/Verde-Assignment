/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        // added new 4 column grid as new4
        repeat: "repeat(auto-fill, minmax(330px, 1fr))",
      },
    },
  },
  plugins: [],
};
