const {nextui} = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    './node_modules/preline/preline.js',
  ],
  theme: {
    extend: {
      colors:{
        default:{
          
        }
      },
      fontFamily: {
        style: ["newspirit", "sans-serif"],
      },
      colors: {
        "default":"#222222",
        "cream": "#edede9",
        "hunyellow": "#f5a524",
        "cerulean":"#457B9D",
        "link":"#1b263b",
        "pantone":"#e63946",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui(),
  require('preline/plugin'),
  ],
};
