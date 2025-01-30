/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: "",
    },
    extend: {
      fontSize: {
        // huge: ["80rem", { lineHeight: "1" }],
      },
      height: {
        screen: "100dvh",
      },
      colors: {
        // customBlue: "rgba(13, 23, 77, 1)",
        // customSky: '#2b9af3',
        customBlue:"#193d8b",
        customOrange:"#e98509"

      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
