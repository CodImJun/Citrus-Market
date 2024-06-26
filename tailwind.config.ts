import type { Config } from "tailwindcss";

import { createFontTheme } from "./theme";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: createFontTheme(),
      colors: {
        primary: "#f26e22",
        grey: {
          100: "#f2f2f2",
          300: "#dbdbdb",
          500: "#c4c4c4",
          700: "#767676",
          900: "#333333",
        },
        black: "#000000",
        white: "#ffffff",
        red: "#EB5757",
      },
    },
  },
  plugins: [],
};
export default config;
