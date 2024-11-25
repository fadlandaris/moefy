module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#fb5875",
        secondary: "#1a1c1e",
        text: "#939aa5"
      },
      fontFamily: {
        poppins: ['Poppins', ],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1024px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};