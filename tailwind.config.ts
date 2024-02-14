import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#f26e22",
        grey: {
          100: "c4c4c4",
          200: "767676",
        },
        black: "#000000",
        white: "#ffffff",
      },
    },
  },
  plugins: [],
};
export default config;
