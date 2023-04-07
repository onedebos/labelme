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
        "labelme-wine": "#5A0912",
        "labelme-pink": "#EA928E",
        "labelme-black": "#333333",
        "labelme-gray": "#EBEBEB",
        "labelme-pink-lighter": "rgba(234, 146, 142, 0.17)",
      },
    },
  },
  plugins: [],
};
