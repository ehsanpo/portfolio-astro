import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";

export default defineConfig({
  site: "https://ehsanpo.github.io/portfolio-astro/",
  base: "portfolio-astro",
  integrations: [tailwind(), react(), mdx()],
  markdown: {
    shikiConfig: {
      theme: "dracula",
      wrap: true,
    },
  },
  vite: {
    ssr: {
      noExternal: ["react-chartjs-2"],
    },
  },
});
