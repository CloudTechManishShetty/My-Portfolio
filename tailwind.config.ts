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
        "primary-bg": "#F8FAFC",
        "text-main": "#0F172A",
        brand: {
          DEFAULT: "#6366F1",
          hover: "#4F46E5",
          light: "#EEF2FF",
          glow: "rgba(99, 102, 241, 0.15)",
        },
        accent: {
          DEFAULT: "#A5B4FC",
          light: "#C7D2FE",
          dark: "#818CF8",
        },
        "dark-bg": "#1E1B4B",
      },
      fontFamily: {
        sans: ["var(--font-plus-jakarta)", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      boxShadow: {
        glow: "0 0 25px -5px rgba(99, 102, 241, 0.3)",
        "glow-lg": "0 0 50px -10px rgba(99, 102, 241, 0.4)",
        glass: "0 8px 32px 0 rgba(31, 38, 135, 0.07)",
      },
    },
  },
  plugins: [],
};

export default config;
