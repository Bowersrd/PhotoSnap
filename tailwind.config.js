/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      accent: {
        100: "hsl(28 100% 79%)",
        200: "hsl(329 36% 59%)",
        300: "hsl(229 100% 67%)",
      },
      white: "hsl(0 0% 100%)",
      black: "hsl(0 0% 0%)",
      gray: "hsl(0 0% 87%)",
    },
    fontSize: {
      xxs: ["0.625rem", { letterSpacing: "1.67px" }],
      xs: ["0.75rem", { lineHeight: "16px", letterSpacing: "2px" }],
      sm: ["0.813rem", { letterSpacing: "0" }],
      base: ["0.938rem", { lineHeight: "25px", letterSpacing: "0" }],
      md: ["1.125rem", { lineHeight: "25px", letterSpacing: "0" }],
      lg: ["1.5rem", { lineHeight: "25px", letterSpacing: "0" }],
      xl: ["2rem", { lineHeight: "40px", letterSpacing: "3.33px" }],
      "2xl": ["2.5rem", { lineHeight: "48px", letterSpacing: "4.17px" }],
    },
    extend: {},
  },
  plugins: [],
};

/*
40 2xl
32 xl
24 lg
18 md
15 base
13 sm
12 xs
10 xxs
*/
