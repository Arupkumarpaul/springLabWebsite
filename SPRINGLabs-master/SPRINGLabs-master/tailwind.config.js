// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1e40af',    // Remove the space before #
        secondary: '#64748b',
        accent: '#06b6d4',
      }
    }
  },
  plugins: [],
}