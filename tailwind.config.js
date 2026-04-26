// Tailwind CSS configuration for the Prime Video app
/** @type {import('tailwindcss').Config} */
module.exports = {
  // Specify files to scan for classes
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {},
  },
  // Include DaisyUI plugin
  plugins: [require("daisyui")],
}