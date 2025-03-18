/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: '#6c5ce7',
          secondary: '#a29bfe',
          accent: '#fd79a8',
          dark: '#2d3436',
          light: '#f8f9fa',
        },
      },
    },
    plugins: [],
  }