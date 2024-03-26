import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      'primary': '#303633',
      'secondary': '#8CE8CB',
      'accent': '#8CE8CB',

    },
    extend: {
      backgroundImage: {

      },
    },
  },
  plugins: [],
};
export default config;
