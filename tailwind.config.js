/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["public/**/*.html"],
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
};
