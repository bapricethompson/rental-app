import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        card: "#D6CFC7",
        mainBlue: "#457B9D",
        mainBlueLight:"#A3C4D6",
        mainBlueDark: "#2C5873",
        lightGrey: "#F1F4F6",
      },
    },
  },
  plugins: [],
} satisfies Config;
