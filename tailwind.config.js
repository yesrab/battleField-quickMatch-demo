/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Rajdhani: "'Rajdhani',serif",
      },
      backgroundImage: {
        menu: `url('/assets/menu.png')`,
      },
      colors: {
        dim: "rgba(0,0,0,0.5)",
      },
    },
  },
  plugins: [],
};

