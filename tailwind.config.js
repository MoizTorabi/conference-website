/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1e40af",    // Blue-800
        secondary: "#3b82f6",  // Blue-600
        indigo: {
          600: "#4f46e5",      // Indigo-600
        },
        gray: {
          50: "#f9fafb",       // Light Gray BG
          700: "#374151",      // Gray Text
        }
      }
    },
  },
  plugins: [],
}