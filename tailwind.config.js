/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust if needed
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#111827",   // Black
        secondary: "#FBBF24", // Gold
        neutral: "#FFFFFF",   // White
      },
    },
  },
  plugins: [],
};
