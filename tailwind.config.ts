import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        fadeIn: "fadeIn 2s ease-out",
        imgDivTransition: "imgDivTransition 1s ease-in-out forwards",
        imgTransition: "imgTransition 1s ease-in-out",
        bioDiv: "bioDiv 2s ease-in-out",
      },
      keyframes: {
        fadeIn: {
          "0%": {
            opacity: "0",
            transform: "scale(0.95)",
          },
          "100%": {
            opacity: "1",
            transform: "scale(1)",
          },
        },
        imgDivTransition: {
          "0%": {
            transform: "translatey(0)",
          },

          "100%": {
            transform: "translatey(-105%)",
          },
        },
        imgTransition: {
          "0%": {
            transform: "translatey(200%)",
          },
          "100%": {
            transform: "translateY(0)",
          },
        },
        bioDiv: {
          "0%": {
            transform: "scale(0.90)",
            opacity: "0",
          },
          "100%": {
            transform: "scale(1)",
            opacity: "1",
          },
        },
        diagonals1: {
          "0%": {
            transform: "translate(-500px, 0)",
          },
          "50%": {
            transform: "translate(900px, 200px)",
          },
          "100%": {
            transform: "translate(200px, 900px)",
          },
        },
      },
    },
  },
};
export default config;
