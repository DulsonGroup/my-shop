/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",  // Обходит все файлы в app/
    "./components/**/*.{js,ts,jsx,tsx}", // Добавляет файлы из components/
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};