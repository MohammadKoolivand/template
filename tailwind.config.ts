import { fontFamily } from "tailwindcss/defaultTheme";
import type { Config } from "tailwindcss";
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      aspectRatio: {
        "48": ".4725",
        "3.42": "3.42",
        ".8": ".8",
        "1.7": "1.7",
        ".46": ".46",
      },
      fontFamily: {
        poppins: ["var(--poppins-font)", ...fontFamily.serif],
        oswald: ["var(--oswald-font)", ...fontFamily.serif],
      },
      screens: {
        "3xl": "1920px",
        "2xl": "1440px",
        tablet: "550px",
        xs: "500px",
      },
      colors: {
        blue: {
          50: "#F3F9FF",
          100: "#93C4FA",
          200: "#4F95E5",
        },
      },
    },
  },
  plugins: [],
};

export default config;
