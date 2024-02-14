import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        "10-400-12": [
          "1rem",
          {
            fontWeight: "400",
            lineHeight: "1.2rem",
          },
        ],
        "12-400-14": [
          "1.2rem",
          {
            fontWeight: "400",
            lineHeight: "1.4rem",
          },
        ],
        "12-500-15": [
          "1.2rem",
          {
            fontWeight: "500",
            lineHeight: "1.5rem",
          },
        ],
        "14-400-10": [
          "1.4rem",
          {
            fontWeight: "400",
            lineHeight: "1rem",
          },
        ],
        "14-400-14": [
          "1.4rem",
          {
            fontWeight: "400",
            lineHeight: "1.4rem",
          },
        ],
        "14-500-17.5": [
          "1.4rem",
          {
            fontWeight: "500",
            lineHeight: "1.75rem",
          },
        ],
        "16-700-20": [
          "1.6rem",
          {
            fontWeight: "700",
            lineHeight: "2rem",
          },
        ],
        "18-500-22": [
          "1.8rem",
          {
            fontWeight: "500",
            lineHeight: "2.2rem",
          },
        ],
      },
      colors: {
        primary: "#f26e22",
        grey: {
          100: "#f2f2f2",
          300: "#dbdbdb",
          500: "#c4c4c4",
          700: "#767676",
        },
        black: "#000000",
        white: "#ffffff",
      },
    },
  },
  plugins: [],
};
export default config;
