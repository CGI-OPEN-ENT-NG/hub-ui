/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,scss}"],
  theme: require("./src/exampleTheme"),
  plugins: [require("@tailwindcss/line-clamp")],
};
