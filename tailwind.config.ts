import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    maxWidth: {
      container: "1440px",
      contentContainer: "1140px",
      containerSmall: "1024px",
      containerxs: "768px",
    },
    extend: {
      screens: {
        xs: "320px", // Extra small(mobile-s)
        sm: "375px", // Small (mobile-m)
        sml: "500px", // Small landscape(mobile-l)
        md: "667px", // Medium (tablet)
        mdl: "768px", // Medium landscape(tablet)
        lg: "960px", // Large (13inch laptop)
        lgl: "1024px", // Large landscape (reg laptop)
        xl: "1280px", // Extra large(15inch laptop)
      },
      fontFamily: {
        bodyFont: ["Montserrat", "sans-serif"],
        titleFont: ["Inter", "sans-serif"],
        linkFont: ["Fira Code", "sans-serif"],
      },
      boxShadow: {
        navbarShadow: "0 10px 30px -10px rgba(2, 12, 27, 0.7)",
      },
      colors: {
        bodyColor: "#0A192F",
        textGreen: "#64ffda",
        textLight: "#ccd6f6",
        textDark: "#8892b0",
        hoverColor: "rgba(100, 255, 218, 0.1)",
        extraColor: "#5D8AA8",
      },
      typography: {
        DEFAULT: {
          css: {
            p: {
              textAlign: "justify",
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("tailwind-scrollbar")],
};

export default config;
