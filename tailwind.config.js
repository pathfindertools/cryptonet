const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: {
    enabled: false,
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
  },
  variants: {
    extend: {
      margin: ['first', 'last'],
    }
  },
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      primary: "var(--primary-color)",
      accent1: "var(--accent1-color)",
      accent2: "var(--accent2-color)",
      accent3: "var(--accent3-color)",
      black: "var(--black-color)",
      white: "var(--white-color)",
      gray: {
        200: "var(--gray-light-color)",
        500: "var(--gray-color)",
        800: "var(--gray-dark-color)",
      },
    },
    screens: {
      sm: "600px",
      md: "900px",
      lg: "1200px",
      xl: "1500px",
      "2xl": "1800px",
    },
    fontSize: {
      xs: ['.75rem', { lineHeight: '1.25rem' }], // 12/20
      sm: ['.875rem', { lineHeight: '1.5rem' }], // 14/24
      base: ['1rem', { lineHeight: '1.75rem' }], // 16/28
      lg: ['1.125rem', { lineHeight: '1.75rem' }], // 18/28
      xl: ['1.25rem', { lineHeight: '2rem' }], // 20/32
      '2xl': ['1.5rem', { lineHeight: '2.25rem' }], // 24/36
      '3xl': ['1.75rem', { lineHeight: '2.5rem' }], // 28/40
      '3xl': ['2rem', { lineHeight: '2.75rem' }], // 32/44
      '4xl': ['2.25rem', { lineHeight: '3rem' }], // 36/48
      '5xl': ['2.5rem', { lineHeight: '3.5rem' }], // 40/56
      '6xl': ['3rem', { lineHeight: '4rem' }], // 48/64
      '7xl': ['4.5rem', { lineHeight: '5.25rem' }], // 72/84
      '8xl': ['6rem', { lineHeight: '7rem' }], // 96/112
    },

    borderWidth: {
      DEFAULT: "1px",
      0: "0",
      2: "2px",
      3: "3px",
      4: "4px",
    },
    extend: {
      textDecoration: ["active"],
      opacity: {
        7: ".075",
        15: ".15",
      },
      maxWidth: {
        "screen-lg-half": "600px",
      },
      spacing: {
        128: "32rem",
      },
      zIndex: {
        "-1": "-1",
      },
      fontFamily: {
        nunito: ["Nunito", ...defaultTheme.fontFamily.sans],
        lato: ["Lato", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
