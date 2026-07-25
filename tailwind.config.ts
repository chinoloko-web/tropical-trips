import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        tropical: {
          purple: {
            50: "#f3e8ff", 100: "#e9d5ff", 200: "#d8b4fe", 300: "#c084fc",
            400: "#a855f7", 500: "#9333ea", 600: "#5e17eb", 700: "#6b21a8",
            800: "#581c87", 900: "#3b0764",
          },
          green: {
            50: "#ecfdf5", 100: "#d1fae5", 200: "#a7f3d0", 300: "#6ee7b7",
            400: "#34d399", 500: "#169d53", 600: "#059669", 700: "#047857",
            800: "#065f46", 900: "#064e3b",
          },
          yellow: {
            50: "#fefce8", 100: "#fef9c3", 200: "#fef08a", 300: "#fde047",
            400: "#f2f62a", 500: "#eab308", 600: "#ca8a04", 700: "#a16207",
            800: "#854d0e", 900: "#713f12",
          },
        },
      },
      fontFamily: {
        sans: ["var(--font-poppins)", "sans-serif"],
        heading: ["var(--font-montserrat)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
