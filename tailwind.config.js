/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "#111111",
        primary: {
          DEFAULT: "#DE2B96",
          hover: "#C52684",
        },
        secondary: {
          DEFAULT: "#7B01C5",
          hover: "#6A01AB",
        },
        // Gradient combinations
        gradient: {
          start: "#DE2B96",
          end: "#7B01C5",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
