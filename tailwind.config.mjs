export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        basement: ["Basement", "sans-serif"],
        inter: ["InterVariable", "sans-serif"],
      },
      colors: {
        primary: "#91f209",
        secondary: "#c5003c",
        tertiary: "#ffe009",
        dark: "#121212",
        light: "#ffffff",
      },
      animation: {
        gradient: "gradient 8s linear infinite",
        scroll: "scroll 30s linear infinite",
      },
      keyframes: {
        gradient: {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme("colors.gray.300"),
            h1: {
              color: theme("colors.white"),
            },
            h2: {
              color: theme("colors.white"),
            },
            h3: {
              color: theme("colors.white"),
            },
            strong: {
              color: theme("colors.white"),
            },
            a: {
              color: theme("colors.primary"),
              "&:hover": {
                color: theme("colors.white"),
              },
            },
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
