export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: ["class", "class"],
  theme: {
    extend: {
      fontFamily: {
        basement: ["Basement", "sans-serif"],
        inter: ["InterVariable", "sans-serif"],
      },
      colors: {
        primary: "#91f209",
        secondary: "#c5003c",
        tertiary: "#fef900",
        dark: "#121212",
        light: "#ffffff",
        blue: "#00f0ff",
        orangeX: "#f59740",
      },
      animation: {
        gradient: "gradient 8s linear infinite",
        scroll: "scroll 30s linear infinite",
        marquee: "marquee var(--duration) infinite linear",
        "marquee-vertical": "marquee-vertical var(--duration) linear infinite",
      },
      keyframes: {
        gradient: {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "300% 300%",
            "background-position": "right center",
          },
        },
        scroll: {
          "0%": {
            transform: "translateX(0)",
          },
          "100%": {
            transform: "translateX(-50%)",
          },
        },
        marquee: {
          from: {
            transform: "translateX(0)",
          },
          to: {
            transform: "translateX(calc(-100% - var(--gap)))",
          },
        },
        "marquee-vertical": {
          from: {
            transform: "translateY(0)",
          },
          to: {
            transform: "translateY(calc(-100% - var(--gap)))",
          },
        },
      },
      typography:
        '(theme) => ({\n        DEFAULT: {\n          css: {\n            color: theme("colors.gray.300"),\n            h1: {\n              color: theme("colors.white"),\n            },\n            h2: {\n              color: theme("colors.white"),\n            },\n            h3: {\n              color: theme("colors.white"),\n            },\n            strong: {\n              color: theme("colors.white"),\n            },\n            a: {\n              color: theme("colors.primary"),\n              "&:hover": {\n                color: theme("colors.white"),\n              },\n            },\n          },\n        },\n      })',
    },
  },
  plugins: [require("@tailwindcss/typography"), require("tailwindcss-animate")],
};
