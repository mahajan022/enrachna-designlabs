import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1b4f8a",
          dark: "#133a6a",
          light: "#2d6ab4",
        },
        surface: "#f4f6f9",
        "surface-2": "#eef1f6",
        ink: "#1a2535",
        muted: "#5a6880",
        border: "#dde2eb",
      },
      fontFamily: {
        display: ["Plus Jakarta Sans", "sans-serif"],
        sans: ["Manrope", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
