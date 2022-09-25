module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  mode: "jit",
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      keyframes: {
        "slide-in-left": {
          "0%": {
            "-webkit-transform": "translateX(120%)",
            transform: "translateX(120%)",
          },
          "100%": {
            "-webkit-transform": "translateX(0%)",
            transform: "translateX(0%)",
          },
        },
        "slide-in-right": {
          "0%": {
            "-webkit-transform": "translateX(0%)",
            transform: "translateX(0%)",
          },
          "100%": {
            "-webkit-transform": "translateX(120%)",
            transform: "translateX(120%)",
          },
        },
      },
      animation: {
        "slide-in-left": "slide-in-left 0.5s ease-out",
        "slide-in-right": "slide-in-right 2s ease-out",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
      colors: {
        // primary: "#af3045",
        primary: "#3E7DFF",
        darkBlack: "#24292e",
        darkBlack2: "#2b333a",
        "light-bg": "#F5F8FF",
        black: "#080321",
        dark: "#131B4D",
        "body-color": "#B5B3BC",
        "body-color-2": "#637381",
        "gradient-1": "#E4F2FE",
        "gradient-2": "#FFEEFE",
      },
      boxShadow: {
        primaryShadow:
          "0px 4px 12px rgb(0 0 0 / 12%), 0px 0px 2px rgb(0 0 0 / 8%)",
      },
    },
  },
  variants: {
    extend: {},
  },
  // plugins: [require("@tailwindcss/forms")],
};