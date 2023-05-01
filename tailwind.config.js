/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "labelme-wine": "#6a2b24",
        "labelme-pink": "#9e1f63",
        "labelme-black": "#333333",
        "labelme-gray": "#EBEBEB",
        "labelme-pink-lighter": "#eacfba",
      },
    },
  },
  plugins: [],
};
