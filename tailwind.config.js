/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0D0D0D",   // Charcoal Black (Background)
        accent: "#DC143C",   // Deep Crimson (Highlight/Links)
        secondary: "#FFD700", // Gold (Secondary Accents)
        textPrimary: "#EAEAEA", // Light Gray (Main Text Color)
      },
    },
  },
  plugins: [],
};
