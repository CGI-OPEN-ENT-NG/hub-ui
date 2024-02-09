/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,scss}"],
  theme: require("./src/themes/defaultTheme"),
  plugins: [require("@tailwindcss/line-clamp")],
};
