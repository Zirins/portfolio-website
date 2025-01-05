module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0D0D0D",   // Charcoal Black (Keep)
        accent: "#4A90E2",   // Muted Blue (Professional Touch)
        secondary: "#F0B90B", // Gold (Luxurious Pop) or "#B8B8B8" (Cool Gray)
        highlight: "#2ECC71", // Emerald Green (Minimal Use)
        textPrimary: "#EAEAEA", // Light Gray (Keep)
      },
    },
  },
  plugins: [],
};
