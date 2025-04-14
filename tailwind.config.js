/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "350px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    colors: {
      /* brown: "#53423e",
      lightBrown: "#645550",
      darkBrown: "#2d2421",
      black: "#1e1917",
      white: "#f1e1d9",
      cyan: "#5fcfdd",
      lightCyan: "#88e5f0",
      darkCyan: "#009fb3",
      orange: "#f0a94f",
      lightOrange: "#fac27b",
      darkOrange: "#d28422",
      grey: "#626965",
      lightGrey: "#8a938e",
      darkGrey: "#3f4441",
       */
      brown: "#53423e",
      lightBrown: "#645550",
      bg1: "#0f0f0f",
      black: "#0f0f0f",
      white: "#f1e1d9",
      green: "#00FF00", // Classic terminal green
      lightGreen: "#33ff33",
      darkGreen: "#007f00",
      cyan: "#00BFFF", // Cool accent
      lightCyan: "#88e5f0",
      darkCyan: "#009fb3",
      red: "#FF5555", // Error or alert
      yellow: "#FFFF00", // Warning or highlight
      magenta: "#FF00FF",
      orange: "#FFA500", // Use sparingly, breaks monotone
      lightOrange: "#fac27b",
      darkOrange: "#d28422",
      grey: "#33ff33",
      lightGrey: "#C0C0C0",
      darkGrey: "#C0C0C0",
    },
    extend: {
      boxShadow: {
        cyanShadow: "0px 0px 20px 0px rgba(0, 255, 0, 0.5)",          // Subtle green glow
  cyanBigShadow: "10px 10px 1000px 500px rgba(0, 255, 0, 0.3)", // Large green aura
  cyanMediumShadow: "10px 10px 200px 150px rgba(0, 255, 0, 0.5)",
        orangeBigShadow: "10px 10px 10000px 500px rgba(240, 169, 79, 0.3)",
        orangeMediumShadow: "10px 10px 2000px 150px rgba(240, 169, 79, 0.5)",
      },
    },
    fontFamily: {
      body: ["Josefin Sans"],
      special: ['"Nunito"'],
    },
  },
  plugins: [],
};
