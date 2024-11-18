import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        bigTablet: "820px",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#121C27",
      },
    },
  },
  plugins: [],
} satisfies Config;
