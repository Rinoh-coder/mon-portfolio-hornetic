
// tailwind.config.js ou tailwind.config.mjs
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}", // si tu utilises le nouveau dossier /app
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
