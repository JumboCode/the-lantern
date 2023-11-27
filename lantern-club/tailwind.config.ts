import type { Config } from 'tailwindcss'
const colors = require('tailwindcss/colors') 

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors:{
      'blue': "#86c76a",
      'sky':{
        '400':"color: rgb(56 189 248)"
      }
    },
    extend: {
      spacing:{
        '13': '500px',
        '2': '8px',

      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily:{
        'kiona':['KIONA','sans-serif']
      },
      colors: { 
        transparent: 'transparent', 
        current: 'currentColor', 
        black: colors.black, 
        white: colors.white, 
        emerald: colors.emerald, 
        indigo: colors.indigo, 
        yellow: colors.yellow, 
        stone: colors.warmGray, 
        sky: colors.lightBlue, 
        neutral: colors.trueGray, 
        gray: colors.coolGray, 
        slate: colors.blueGray, 
        lime: colors.lime, 
        rose: colors.rose, 
       lanternblue: '#4E78C8',
        lanternyellow:'#E3B54C',
    }, 
    },
  },
  plugins: [],
}
export default config;
