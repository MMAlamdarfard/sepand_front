import type { Config } from "tailwindcss";
const {nextui} = require("@nextui-org/react");
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      boxShadow: {
        'sidebar': '0 0 21px 0 rgba(89, 102, 122, 0.1)',
        'top-sidebar':'-9px 0 20px rgba(89, 102, 122, 0.1)',
        'top-navbar':'-20 0 20px rgba(89, 102, 122, 0.1)',
        'card':'0 9px 20px rgba(46,35,94,.07)'
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        lightBackground:'#F7F8F9',
        sepandprimary: {
          50: '#F5F9FF',
          100: '#EBF2FF',
          200: '#C7D8FF',
          300: '#A3BDFF',
          400: '#7FA3FF',
          500: '#5B89FF',
          600: '#376FFF',
          700: '#1455FF',
          800: '#003BFF',
          900: '#0025B3',
        },
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()]
};
export default config;