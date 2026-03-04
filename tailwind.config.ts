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
        navy: {
          50: "#f0f3f7",
          100: "#dae1eb",
          200: "#b5c3d7",
          300: "#8ba1bf",
          400: "#6680a7",
          500: "#4a6490",
          600: "#3a4f73",
          700: "#2c3d57",
          800: "#1e2b3d",
          900: "#111a26",
          950: "#0a1017",
        },
        cream: {
          50: "#fefdfb",
          100: "#faf8f4",
          200: "#f5f0e8",
          300: "#ede5d8",
          400: "#e0d4c2",
        },
        copper: {
          50: "#fdf5ef",
          100: "#fbe8d6",
          200: "#f6ceab",
          300: "#f0ad76",
          400: "#e8863f",
          500: "#e2701f",
          600: "#d35916",
          700: "#af4314",
          800: "#8c3618",
          900: "#712f16",
        },
        charcoal: {
          50: "#f6f6f6",
          100: "#e7e7e7",
          200: "#d1d1d1",
          300: "#b0b0b0",
          400: "#888888",
          500: "#6d6d6d",
          600: "#5d5d5d",
          700: "#4f4f4f",
          800: "#454545",
          900: "#3d3d3d",
          950: "#1a1a1a",
        },
      },
      fontFamily: {
        sans: ["var(--font-outfit)", "system-ui", "sans-serif"],
        display: ["var(--font-outfit)", "system-ui", "sans-serif"],
        serif: ["var(--font-source-serif)", "Georgia", "serif"],
      },
      fontSize: {
        "display-xl": ["5rem", { lineHeight: "1.05", letterSpacing: "-0.03em" }],
        "display-lg": ["3.75rem", { lineHeight: "1.1", letterSpacing: "-0.025em" }],
        "display-md": ["3rem", { lineHeight: "1.15", letterSpacing: "-0.02em" }],
        "display-sm": ["2.25rem", { lineHeight: "1.2", letterSpacing: "-0.015em" }],
        "heading-lg": ["1.875rem", { lineHeight: "1.3", letterSpacing: "-0.01em" }],
        "heading-md": ["1.5rem", { lineHeight: "1.35", letterSpacing: "-0.005em" }],
        "heading-sm": ["1.25rem", { lineHeight: "1.4" }],
        "body-lg": ["1.125rem", { lineHeight: "1.65" }],
        "body-md": ["1rem", { lineHeight: "1.65" }],
        "body-sm": ["0.875rem", { lineHeight: "1.6" }],
        caption: ["0.75rem", { lineHeight: "1.5", letterSpacing: "0.05em" }],
      },
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
        "26": "6.5rem",
        "30": "7.5rem",
      },
      maxWidth: {
        "8xl": "88rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.19, 1, 0.22, 1)",
      },
      keyframes: {
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-in-right": {
          "0%": { opacity: "0", transform: "translateX(30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
      animation: {
        "fade-in-up": "fade-in-up 0.8s ease-out forwards",
        "slide-in-right": "slide-in-right 0.8s ease-out forwards",
      },
    },
  },
  plugins: [],
};
export default config;
