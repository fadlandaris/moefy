const { default: flattenColorPalette } = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  mode: "jit",
  darkMode: "class", // Added darkMode configuration
  theme: {
    extend: {
      colors: {
        primary: "#fb5875",
        secondary: "#1a1c1e",
      },
      fontFamily: {
        poppins: ['Poppins'],
      },
      keyframes: {
        slideIn: {
          '0%': { transform: 'translateY(-10%)' },
          '100%': { transform: 'translateY(0)' },
        },  
        blurToNone: {
          '0%': { filter: 'blur(5px)' },
          '100%': { filter: 'blur(0)' },
        },
      },
      animation: {
        spinSlow: 'spin 1.5s linear infinite', 
        slideIn: 'slideIn 0.5s ease-in-out',
        blurToNone: 'blurToNone 1s  ease-in-out',
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
  plugins: [addVariablesForColors],
};

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
