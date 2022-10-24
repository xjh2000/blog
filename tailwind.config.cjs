/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ["light", "night", "synthwave"],
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("daisyui")
  ],
};
