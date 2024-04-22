import type { Config } from "tailwindcss";
const colors = require("tailwindcss/colors");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      "lantern-blue": "#D5E1F3",
      "button-blue": "#4279BC",
      "button-outline-blue": "#94BBE3",
      'contact-g1':'#F79838',
      'contact-g2':'#FECB66',
      'g-yellow1':"#FAEBBE",
      'blue-g1':'#D5E1F3',
      'blue-g2':'#94BBE3',
      'nav-bg':'#D5E1F3',
      'orange': '#F79838',
      
      sky: {
        "400": "color: rgb(56 189 248)",
      },
    },
    extend: {
      scale: {
        '50': '.5',
        '175': '1.75',
      },
      spacing:{
        '13': '500px',
        'contact':'500px',
        '2': '8px',
        'eboardx':'325px',
        'eboardy':'400px',
        'line-space': '22rem',
        'triangle-top': '150px',

      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        kiona: ["KIONA", "sans-serif"],
        nunito: ["NUNITO", "sans-serif"],
        nunitoreg: ["NUNITO-REG", "sans-serif"],
        nunitolight: ["NUNITO-LIGHT", "sans-serif"],
        nunitobold: ["NUNITOBOLD", "sans-serif"],
        coolvetica: ["COOLVETICA", "sans-serif"],
      },
      colors: {
        transparent: 'transparent', 
        current: 'currentColor', 
        black: colors.black, 
        white: colors.white, 
        emerald: colors.emerald, 
        indigo: colors.indigo, 
        yellow: colors.yellow, 
        stone: colors.stone, 
        sky: colors.sky, 
        neutral: colors.neutral, 
        gray: colors.gray, 
        slate: colors.slate, 
        lime: colors.lime, 
        rose: colors.rose, 
       lanternblue: '#4E78C8',
        lanternyellow:'#E3B54C',
        gc1:'#6180B8',
        gc2:'#4E78C8',
        gc3:'#9A9789',
        orange: colors.orange,
        gc4:'#BBA56D',
        gc5:'#E3B54C',

      },
    },
  },
  plugins: [],
};
export default config;
