/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html","./src/**/*.{js,ts,jsx,tsx,mdx}"  
  ],
  theme: {
    extend: {
      container: {
        center: true,
      padding:"15px",
    },
    colors: {
      accent:"#6BAD0D",
      accentDark: "#629F0C",
    },
  },
  },
  plugins: [],
}